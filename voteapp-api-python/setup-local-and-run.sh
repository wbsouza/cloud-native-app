#!/bin/bash

if [ ! -d .venv ]; then
  python3 -m venv .venv
fi

source .venv/bin/activate

sleep 3s
pip3 install -r requirements.txt

python3 main.py

