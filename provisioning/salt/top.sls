base:
  'web*':
    - nginx
  'sensor*':
    - lumberjack
  'elk*':
    - nginx
    - logstash
    - elasticsearch
    - kibana
