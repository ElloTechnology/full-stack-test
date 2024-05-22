#!/bin/bash

# Temporary file that removes files created by server on startup, to avoid conflicting files

rm -rf dist/resources
rm resources/data.json
cp src/schema.graphql dist/schema.graphql