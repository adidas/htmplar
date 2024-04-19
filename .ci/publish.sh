#!/bin/bash

set -eu

echo //registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN} > ~/.npmrc
npm run publish
