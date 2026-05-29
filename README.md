# next-maicc-official

## SSG + CSG

## Docker

Build and run with Docker Compose:

```bash
docker compose up -d --build
```

The site is available at:

```text
http://localhost:3000
```

Build the application image only:

```bash
docker build -t next-maicc-official:local .
```

Run the application image directly:

```bash
docker run --rm -p 3000:3000 next-maicc-official:local
```

打包后的docker怎么部署到服务器
16:24

有两种常用方式，最简单的是把本机镜像导出成 .tar，传到服务器再导入运行。

方式一：导出镜像部署

在你本机项目目录执行：

docker save -o next-maicc-official.tar next-maicc-official:local
把这 3 个文件传到服务器：

next-maicc-official.tar
docker-compose.yml
nginx.conf
服务器上导入镜像：

docker load -i next-maicc-official.tar
然后在 docker-compose.yml 所在目录启动：

docker compose up -d
访问服务器：

http://服务器IP:3000
如果你想用 80 端口，把 docker-compose.yml 里的：

ports:

- "3000:80"
  改成：

ports:

- "80:80"
  然后服务器执行：

docker compose up -d
方式二：推到镜像仓库

如果你有 Docker Hub / 阿里云镜像仓库，可以这样：

docker tag next-maicc-official:local your-registry/next-maicc-official:latest
docker push your-registry/next-maicc-official:latest
服务器上：

docker pull your-registry/next-maicc-official:latest
docker run -d --name next-maicc-official -p 3000:3000 your-registry/next-maicc-official:latest
不过你当前项目用了 docker-compose.yml 里的 nginx 反代，所以我更建议用第一种：镜像 tar + compose 文件一起部署，最直接。
