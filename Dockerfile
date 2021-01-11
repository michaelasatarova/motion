FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
        wget \
        bzip2 \
        graphviz

RUN mkdir -p /backend

COPY ./backend/requirements.yml /backend/requirements.yml

# Create environment
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

# Add env path to environment
ENV PATH /opt/conda/envs/backend/bin:$PATH
# Activate interpreter
RUN echo "source activate backend" >~/.bashrc

# Create a scripts folder
RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*


COPY ./backend /backend

WORKDIR /backend


#RUN python manage.py makemigrations
#RUN python manage.py migrate

#CMD ["python", "./manage.py", "runserver", "0.0.0.0:9000"]
#EXPOSE 9000
