#!/bin/bash

set -eu

echo //registry.npmjs.org/:_authToken=$NPM_TOKEN > ~/.npmrc
npm run publish
