const isProd = process.env.NODE_ENV === 'production';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// Si se despliega en github.io/repo, el basePath debe ser /repo
// Si usas un dominio personalizado, cambia esto a '' (cadena vacía)
const basePath = isGithubActions && process.env.GITHUB_REPOSITORY
  ? '/' + process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita la exportación estática
  basePath: isProd ? basePath : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Requerido para exportar imágenes estáticas
  },
}

export default nextConfig

