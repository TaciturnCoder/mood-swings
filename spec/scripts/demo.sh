#!/usr/bin/bash

include="--load-path=."
io="spec/demo/index.scss:spec/demo/index.css"
npx sass --watch --no-source-map "$include" "$io"
