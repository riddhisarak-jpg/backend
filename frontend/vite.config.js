import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
proxy:{ // proxy is used to redirect the request from frontend to backend server,now any request to /data will be redirected to http://localhost:3000/data,no issue of CORS
  '/data':'http://localhost:3000',
},
  },//another way is whitelisting the frontend server in backend server using CORS package, but proxy is easier to implement and maintain, also it is more secure as it does not expose the backend server to the public, it only redirects the request from frontend to backend server, so it is recommended to use proxy in development environment and CORS in production environment
  plugins: [react()],
})
