#!/bin/bash

echo "actualizando repositorio frontend=>$(date)";
git pull -v --rebase
echo "repositorio frontend actualizado =>$(date)";

