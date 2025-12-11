#!/bin/bash
cd /home/kavia/workspace/code-generation/smart-meeting-scheduler-296175-296221/frontend_react_js
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

