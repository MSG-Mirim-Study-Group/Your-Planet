# 기본 이미지 선택
FROM php:8.2-fpm-alpine3.18

# 필요한 소프트웨어 설치
RUN docker-php-ext-install mysqli

# 컨테이너 내부 디렉토리 및 파일 추가
COPY ./source /var/www/html

# 환경 변수 설정
# ENV MYSQL_HOST=root
# ENV MYSQL_PORT=3308

# 컨테이너 실행 명령 정의
CMD ["php-fpm"]
