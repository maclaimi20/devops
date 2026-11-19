
# Use Nginx web server based on lightweight Alpine Linux
FROM nginx:alpine

# Copy the main website page into the Nginx web directory
COPY index.html /usr/share/nginx/html/index.html

# Copy the Hello page
COPY hello.html /usr/share/nginx/html/hello.html

# Copy the Contact page
COPY contact.html /usr/share/nginx/html/contact.html

# Expose port 80 for HTTP traffic
EXPOSE 80
