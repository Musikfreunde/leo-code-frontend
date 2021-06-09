#!/bin/bash

set -ex

ng build --prod
docker build -t zbenii/leofrontend:latest .
docker image push zbenii/leofrontend:latest
