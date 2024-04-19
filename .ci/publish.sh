#!/bin/bash

set -eu

echo "Publishing release $TAG"

echo //registry.npmjs.org/:_authToken=$NPM_TOKEN > ~/.npmrc
npm run publish
