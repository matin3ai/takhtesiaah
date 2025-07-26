# Takhtesiaah.ir 🖤  
A modern educational web platform for Persian-speaking first graders, built with Django, Docker, and love.

---

## 🌟 Overview

**Takhtesiaah.ir** is an educational web application designed to host and serve blog posts, audio playlists, and multimedia learning content (video/audio) for Persian-speaking children, especially first graders.  
The platform is lightweight, production-ready, SEO-friendly, and designed for low-resource VPS (1 vCPU, 2GB RAM).

---

## 🧠 Features

### 🎓 Blog
- Create, edit, and delete blog posts via Django Admin.
- Upload and embed audio/video files (`.mp4`, `.webm`) in posts.
- Beautiful blog list & detail pages with dark/light themes.

### 🎧 Playlist
- Manage audio playlists linked to educational books.
- QR-ready audio file system for physical books.

### 🗂️ Media Management
- All media files stored in `media/` with organized subfolders.
- Secure public access via `MEDIA_URL`.

### 🛠 Admin Panel
- Inline video/audio upload with custom admin forms.
- Post preview and multimedia embedding inside admin.

### 📦 Static & SEO
- Static assets collected in `staticfiles/` for production use.
- Sitemap.xml generation for SEO optimization.

### 🐳 Docker-Based Deployment
- Separate `Dockerfile` and `docker-compose` for dev/prod.
- Gunicorn + Nginx setup with non-root `appuser`.
- TLS enabled via self-signed cert (can be replaced).
- Memory-safe Gunicorn config for limited servers.

---

## 📁 Project Structure

<pre><code>
takhtesiaah.ir/ ├── LICENSE └── TAKHTESIAAH/ ├── docker-compose.dev.yml ├── docker-compose.prod.yml ├── Dockerfile ├── Dockerfile.dev ├── nginx/ │ ├── nginx.conf │ └── ssl/ │ ├── cert.pem │ └── key.pem ├── requirements/ │ ├── base.txt │ ├── dev.txt │ └── prod.txt ├── scripts/ │ └── entrypoint.sh └── src/ ├── apps/ │ ├── blog/ │ ├── core/ │ └── playlist/ ├── config/ │ ├── settings/ │ ├── urls.py │ └── wsgi.py ├── database/ ├── media/ ├── staticfiles/ └── manage.py 
</code></pre>

---

## 🚀 Deployment & Performance

**Production-ready settings include:**
- `--workers=2` and `--max-requests=500` to avoid memory leaks.
- Resource limits: 1 CPU, 1GB RAM (in Docker).
- TLS (HTTPS) via Nginx reverse proxy.
- Environment support for `dev` and `prod`.

---

## 📉 VPS Resource Optimization

Deployed on a lightweight VPS:
- 1 vCPU, 2GB RAM
- Python 3.13 (gevent not supported yet, using sync workers)
- Dockerized and isolated app runtime

**Tips & Observations**:
- Uploads >50MB may timeout. <30MB is safe.
- Use `docker stats` to monitor performance.
- Cloudflare for DNS and TLS offloading recommended.

---

## 🛡 License

See the [LICENSE](./LICENSE) file for more details.

---

## 📈 Future Improvements

- Move media to cloud (Cloudflare Stream, S3).
- Add user system (JWT-based auth).
- Upgrade server or use CDN for static/media.
- Add Prometheus/Grafana monitoring stack.

---

## 👤 Author

Developed by **Matin Alijani**  
📧 matin3ai@gmail.com  
🌐 [takhtesiaah.ir](https://takhtesiaah.ir)  
🔗 GitHub: [@matin3ai](https://github.com/matin3ai)

---
