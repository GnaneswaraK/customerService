
FROM node:7.7-alpine
MAINTAINER Gnaneswara K <kgnanesh999@gmail.com>

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/customerservice && cp -a /tmp/node_modules /opt/customerservice

# Setup workdir
WORKDIR /opt/customerservice
COPY . /opt/customerservice

# run
EXPOSE 3000
CMD ["npm", "start"]