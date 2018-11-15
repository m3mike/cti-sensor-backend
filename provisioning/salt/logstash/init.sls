
logstash:
  pkg:
      - installed
  service:
      - running
      - enable: True
      - require:
          - pkg: logstash-contrib

logstash-contrib:
  pkg:
      - installed

/etc/logstash/conf.d/logstash.conf:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://logstash/logstash.conf

/etc/logstash/conf.d/01-lumberjack-input.conf:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://logstash/01-lumberjack-input.conf

/etc/logstash/conf.d/10-syslog.conf:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://logstash/10-syslog.conf


/etc/pki/tls/private/logstash-forwarder.key:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://logstash/logstash-forwarder.key

/etc/pki/tls/certs/logstash-forwarder.crt:
  file:
    - managed
    - user: root
    - group: root
    - mode: 644
    - source: salt://logstash/logstash-forwarder.crt
