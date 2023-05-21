#!/bin/bash

# Build the React app
cd Frontend
npm install
npm run build

# Build the Nest API
cd Backend
npm install
npm run build
