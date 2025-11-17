import React, { useEffect, useRef } from 'react';
import './Galaxy.css';
interface GalaxyProps {
  hueShift?: number;
  density?: number;
  speed?: number;
  glowIntensity?: number;
  saturation?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  mouseInteraction?: boolean;
  mouseRepulsion?: boolean;
  repulsionStrength?: number;
  transparent?: boolean;
}
export function Galaxy({
  hueShift = 220,
  density = 0.8,
  speed = 0.3,
  glowIntensity = 0.5,
  saturation = 0.8,
  twinkleIntensity = 0.5,
  rotationSpeed = 0.02,
  mouseInteraction = true,
  mouseRepulsion = true,
  repulsionStrength = 3,
  transparent = true
}: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({
    x: 0.5,
    y: 0.5
  });
  const mouseActive = useRef(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }
    if (transparent) {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    }
    const vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec2 aTexCoord;
      varying vec2 vTexCoord;
      void main() {
        vTexCoord = aTexCoord;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;
    const fragmentShaderSource = `
      precision highp float;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform float uHueShift;
      uniform float uDensity;
      uniform float uSpeed;
      uniform float uGlowIntensity;
      uniform float uSaturation;
      uniform float uTwinkleIntensity;
      uniform float uRotationSpeed;
      uniform vec2 uMouse;
      uniform float uMouseActive;
      uniform float uRepulsionStrength;
      uniform bool uMouseRepulsion;
      varying vec2 vTexCoord;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }

      float star(vec2 uv, float flare) {
        float d = length(uv);
        float m = (0.05 * uGlowIntensity) / d;
        
        float rays = max(0.0, 1.0 - abs(uv.x * uv.y * 1000.0));
        m += rays * flare * uGlowIntensity;
        
        m *= smoothstep(1.0, 0.2, d);
        return m;
      }

      vec3 starLayer(vec2 uv, float layer) {
        vec3 col = vec3(0.0);
        vec2 gv = fract(uv) - 0.5;
        vec2 id = floor(uv);

        for (int y = -1; y <= 1; y++) {
          for (int x = -1; x <= 1; x++) {
            vec2 offset = vec2(float(x), float(y));
            vec2 cellId = id + offset;
            float seed = hash(cellId + layer);
            float size = fract(seed * 345.32);
            
            float twinkle = sin(uTime * uSpeed * 2.0 + seed * 6.28) * 0.5 + 0.5;
            twinkle = mix(1.0, twinkle, uTwinkleIntensity);
            
            float flareSize = smoothstep(0.9, 1.0, size) * twinkle;
            
            vec2 starPos = gv - offset;
            starPos += (fract(seed * vec2(34.0, 38.0)) - 0.5) * 0.5;
            
            float starBrightness = star(starPos, flareSize);
            
            float hue = fract(seed + uHueShift / 360.0);
            float sat = uSaturation * (0.5 + seed * 0.5);
            float val = 0.8 + seed * 0.2;
            vec3 color = hsv2rgb(vec3(hue, sat, val));
            
            col += starBrightness * size * color * twinkle;
          }
        }
        return col;
      }

      void main() {
        vec2 uv = (vTexCoord * uResolution - uResolution * 0.5) / uResolution.y;
        
        if (uMouseRepulsion && uMouseActive > 0.0) {
          vec2 mouseUV = (uMouse * uResolution - uResolution * 0.5) / uResolution.y;
          float dist = length(uv - mouseUV);
          vec2 repulsion = normalize(uv - mouseUV) * (uRepulsionStrength / (dist + 0.1));
          uv += repulsion * 0.05 * uMouseActive;
        }
        
        float angle = uTime * uRotationSpeed;
        mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        uv = rot * uv;
        
        vec3 col = vec3(0.0);
        float numLayers = 4.0;
        
        for (float i = 0.0; i < numLayers; i++) {
          float depth = i / numLayers;
          float scale = mix(20.0, 0.5, depth) * uDensity;
          float fade = (1.0 - depth) * smoothstep(1.0, 0.9, 1.0 - depth);
          col += starLayer(uv * scale + i * 453.32, i) * fade;
        }
        
        if (${transparent ? 'true' : 'false'}) {
          float alpha = length(col);
          alpha = smoothstep(0.0, 0.3, alpha);
          gl_FragColor = vec4(col, min(alpha, 1.0));
        } else {
          gl_FragColor = vec4(col, 1.0);
        }
      }
    `;
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);
    const vertices = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, 'aPosition');
    const aTexCoord = gl.getAttribLocation(program, 'aTexCoord');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(aTexCoord);
    gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 16, 8);
    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uHueShift = gl.getUniformLocation(program, 'uHueShift');
    const uDensity = gl.getUniformLocation(program, 'uDensity');
    const uSpeed = gl.getUniformLocation(program, 'uSpeed');
    const uGlowIntensity = gl.getUniformLocation(program, 'uGlowIntensity');
    const uSaturation = gl.getUniformLocation(program, 'uSaturation');
    const uTwinkleIntensity = gl.getUniformLocation(program, 'uTwinkleIntensity');
    const uRotationSpeed = gl.getUniformLocation(program, 'uRotationSpeed');
    const uMouse = gl.getUniformLocation(program, 'uMouse');
    const uMouseActive = gl.getUniformLocation(program, 'uMouseActive');
    const uRepulsionStrength = gl.getUniformLocation(program, 'uRepulsionStrength');
    const uMouseRepulsion = gl.getUniformLocation(program, 'uMouseRepulsion');
    const startTime = performance.now();
    const render = () => {
      resizeCanvas();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - startTime) / 1000.0);
      gl.uniform1f(uHueShift, hueShift);
      gl.uniform1f(uDensity, density);
      gl.uniform1f(uSpeed, speed);
      gl.uniform1f(uGlowIntensity, glowIntensity);
      gl.uniform1f(uSaturation, saturation);
      gl.uniform1f(uTwinkleIntensity, twinkleIntensity);
      gl.uniform1f(uRotationSpeed, rotationSpeed);
      gl.uniform2f(uMouse, mousePos.current.x, mousePos.current.y);
      gl.uniform1f(uMouseActive, mouseActive.current);
      gl.uniform1f(uRepulsionStrength, repulsionStrength);
      gl.uniform1i(uMouseRepulsion, mouseRepulsion ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = canvas.height - (e.clientY - rect.top);
      mouseActive.current = 1;
    };
    const handleMouseLeave = () => {
      mouseActive.current = 0;
    };
    if (mouseInteraction) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (mouseInteraction) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [hueShift, density, speed, glowIntensity, saturation, twinkleIntensity, rotationSpeed, mouseInteraction, mouseRepulsion, repulsionStrength, transparent]);
  return <canvas ref={canvasRef} className="galaxy-container" />;
}