#yum localinstall -y /vagrant/packages/logstash-forwarder-0.3.1-1.x86_64.rpm
#yum localinstall -y /vagrant/packages/suricata-2.0.6-1.el7.centos.x86_64.rpm
#
# repo setup for elk dependencies
#

# elasticsearch
rpm --import http://packages.elasticsearch.org/GPG-KEY-elasticsearch
cat > /etc/yum.repos.d/elasticsearch.repo <<EOF
[elasticsearch-1.4]
name=Elasticsearch repository for 1.4.x packages
baseurl=http://packages.elasticsearch.org/elasticsearch/1.4/centos
gpgcheck=1
gpgkey=http://packages.elasticsearch.org/GPG-KEY-elasticsearch
enabled=1
EOF

# logstash time
cat > /etc/yum.repos.d/logstash.repo <<EOF
[logstash]
name=Logstash
baseurl=http://packages.elasticsearch.org/logstash/1.4/centos
gpgcheck=1
gpgkey=http://packages.elasticsearch.org/GPG-KEY-elasticsearch
enabled=1
EOF

##############################
# install elk packages
##############################
#yum install -y elasticsearch logstash logstash-contrib java-1.7.0-openjdk nginx
#(cd /usr/share/; tar -zxvf /vagrant/packages/kibana-3.1.2.tar.gz)
#ln -s /usr/share/kibana-3.1.2 /usr/share/kibana3

