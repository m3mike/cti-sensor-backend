
suricata:
  pkg:
      - installed
  service:
      - running
      - enable: True

logstash-forwarder:
  pkg:
      - installed

/etc/init.d/logstash-forwarder:
  file:
    - managed
    - user: root
    - group: root
    - mode: 755
    - source: salt://lumberjack/logstash-forwarder.init

/etc/sysconfig/logstash-forwarder:
  file:
    - managed
    - user: root
    - group: root
    - mode: 755
    - source: salt://lumberjack/logstash-forwarder.sysconfig

/etc/logstash-forwarder:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://lumberjack/logstash-forwarder

/etc/pki/tls/private/logstash-forwarder.key:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://lumberjack/logstash-forwarder.key

/etc/pki/tls/certs/logstash-forwarder.crt:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://lumberjack/logstash-forwarder.crt
