var config_template = "\
!===КОНФИГУРАЦИЯ===</br>\n\
conf t</br>\n\
!</br>\n\
interface Vlan{{VLAN}}</br>\n\
 ip address {{IP_ADDR}} {{MASK}}</br>\n\
exit</br>\n\
!</br>\n\
wr mem</br>\n\
!</br>\n\
";
