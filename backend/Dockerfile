
FROM node
WORKDIR /daq
COPY package.json .
COPY index.js .
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=bind,source=package.json,target=package.json \
    npm install
COPY package.json .
EXPOSE 4000
CMD ["node","index.js"]