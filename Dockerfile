FROM alpine:latest

ENV PATH="/usr/local/bin:${PATH}"
ARG PB_VERSION=0.18.6

RUN apk add --no-cache \
    # unzip \
    curl\
    ca-certificates

# download and unzip PocketBase
# ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
# RUN unzip /tmp/pb.zip -d /usr/local/bin/ 
# RUN rm -rf /tmp/pb.zip
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip -o /tmp/pb.zip && \
    unzip /tmp/pb.zip -d /usr/local/bin && \
    rm -rf /tmp/pb.zip
# uncomment to copy the local pb_migrations dir into the image
# COPY ./pb_migrations /pb/pb_migrations

# uncomment to copy the local pb_hooks dir into the image
# COPY ./pb_hooks /pb/pb_hooks
WORKDIR /app
EXPOSE 8080

# start PocketBase
CMD ["pocketbase", "serve", "--http=0.0.0.0:8080"]