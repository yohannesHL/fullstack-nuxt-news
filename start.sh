#! /bin/bash

cd /frontend
# npm run build
npm run build
cp -r /frontend/dist/* /backend/client


cd /backend
# echo "built frontend"
node .
