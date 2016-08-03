var config_template = "\
!===КОНФИГУРАЦИЯ===</br>\n\
conf t</br>\n\
!</br>\n\
interface Vlan{{VLAN}}</br>\n\
 description === LAN ===</br>\n\
 ip nat inside</br>\n\
 ip virtual-reassembly in</br>\n\
 ip address {{IP_ADDR}} {{MASK}}</br>\n\
 ip tcp adjust-mss 1442</br>\n\
exit</br>\n\
!</br>\n\
wr mem</br>\n\
!</br>\n\
";
