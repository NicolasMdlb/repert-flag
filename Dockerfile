# Each instruction represents a layers (docker cache)
FROM node

# Set docker to work in this directory
WORKDIR /repert-flag

# So docker works with layers, it verify package 
# because npm install run each build image 
COPY package.json /repert-flag

# Specify a docker to instal all dependencies of our app
RUN npm install

# First . => source file (here repert-flag)
# Second . => path inside image (name your choice)
COPY . /repert-flag

# Containers are isoled of our local env but docker has its own internal network
EXPOSE 3000

# Run command when container starts 
CMD ["npm", "start"]