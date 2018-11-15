#### Hickory

##### Status
The following instructions and repository contents should build you a homemade suricata sensor, configured elk cluster, and a webui vm which will hold the web interface.  Please feel free to test away and let me know how things work.

##### Starting a Hickory Cluster
Hickory currently exists across three logical VMs:
* sensor1 - Suricata IDS (_single initial sensor VM initially_)
* elk     - ElasticSearch/LogStash/Kibana triforce
* webui   - Web-based frontend for the magic

The salt piece now has enough kinks worked out that it’s possible to bring up a new cluster.
###### Requirements
* Linux platform, tested using CentOS 7
* Virtualbox installed
* Internet access (packages/dependencies)

1. Checkout hickory repository
2. Navigate to provisioning folder of hickory repository where the primary Vagrantfile is located
3. At command prompt, execute:
		vagrant up
*   All three VMs use the same base image.  On the first run the base image will download (\~480MB) and cache the image globally.  All subsequent runs use the cached image unless a new base image version has been released (managed automatically by default)
* The last box to build, sensor1, will prompt you for which network interface you would like to bridge.  The provisioning process will wait until you answer.  On average, assuming base image is cached locally, it takes about 20 minutes from starting vagrant until you are prompted.
* The boxes are built in the order: webui, elk, sensor1.  
4. After the boxes are built, you will have to manually make the following changes (until build process is cleaned up).
	* sensor1: Edit `/etc/sysconfig/suricata` and replace `eth0` with the bridged NIC’s name.  CentOS 7 uses a new naming scheme, my default NIC is `enp0s3`.
		* From the Linux host, in Virtualbox find the sensor1 host (named should contain sensor1 and should be running).  Edit the settings and make sure you enable promiscuous mode for the NIC specified in the Suricata config.
		* From the Linux host, bring up a browser and go to the main kibana page at [172.16.16.101][1].  Currently the fancier dashboard you’ve seen during demos is not installed, but I’ll export it and make it available so you can manually install it in the meantime.
		* It may take a minute or two at first for data to show up from Suricata at first startup.  Currently syslog data from the elk host is also sent to elasticsearch, so that will give you a quick warm-fuzzy if things are working or not.  
		* NOTE: Using Virtualbox I have had issues getting the promiscious mode to work consistently as it should.  I primarly have switched to using VMware for that reason.  The downside is the VMware vagrant provider is not open source, Vagrant developers charge $79 a license to support VMware Workstation or Fusion.  Also, if you want to use Vagrant with both Fusion and Workstation you have to buy two licenses.


##### Packer-related
Packer builds the base image from installation media that provides the clean base OS the applications are provisioned from.
The configuration within Hickory will by default produce both a VirtualBox and VMware output image, running the builds in parallel.  These base images are used as the basis for the base, building block, vagrant images the Hickory application is being built on.  For the most part most people should never need to touch or use this; but there is a consistent, scriptable method to build a new CentOS image.

##### Notes
* The build process described uses a tool named [packer][2].  You will need to download and install packer for your particular platform to perform the build, however there should be no other dependencies on your build host.
* The automated build currently uses the default CentOS iso, which is 4GB.  Your first build will start slow as the iso downloads, however after downloading the iso packer caches it so subsequent builds will go significantly faster.

[1]:	http://172.16.16.101
[2]:	http://www.packer.io