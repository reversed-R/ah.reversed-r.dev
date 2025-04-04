FROM node:latest AS builder
ARG VITE_AH_EPOCH
WORKDIR /build
COPY . /build
RUN echo VITE_AH_EPOCH=${VITE_AH_EPOCH} > /build/.env
RUN \
  npm install && \
  npm run build

FROM nginx:latest
COPY --from=builder /build/dist /usr/share/nginx/html

EXPOSE 80
