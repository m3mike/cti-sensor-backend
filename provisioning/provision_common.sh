#!/bin/bash

yum install -y epel-release deltarpm

cat > /etc/yum.repos.d/hickory-testing.repo <<EOF
[hickory-testing]
name=Hickory Test Repository $releasever - $basearch - Local
baseurl=http://45.55.156.117/repo/
enabled=1
gpgcheck=0
EOF