# 使用官方的 Node.js 作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 或 yarn.lock 文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制 Next.js 应用的所有文件到工作目录
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 暴露 Next.js 默认端口
EXPOSE 3000

# 启动 Next.js 应用
CMD ["npm", "start"]
