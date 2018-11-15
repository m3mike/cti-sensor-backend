
kibana:
  archive.extracted:
    - name: /usr/share/
    - source: salt://kibana/kibana-3.1.2.tar
    - source_hash: md5=6f8bed0375a5c9da2e614850b4eb998a
    - archive_format: tar
    - user: root
    - group: root
    - if_missing: /usr/share/kibana-3.1.2


/usr/share/kibana3:
  file.symlink:
    - target: /usr/share/kibana-3.1.2