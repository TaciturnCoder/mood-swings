#!/usr/bin/bash

include="--load-path=."
npx sass --no-source-map "$include" spec/demo
