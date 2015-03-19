// Mock ways, nodes, and result of Ways#attachNodeIDs (minus timestamps);

var ways = [{
  changeset_id: '0',
  id: '73758',
  visible: true,
  version: '1'
},
{ changeset_id: '0',
  id: '73826',
  visible: true,
  version: '1'
},
{ changeset_id: '0',
  id: '75340',
  visible: true,
  version: '1'
},
{ changeset_id: '0',
  id: '75574',
  visible: true,
  version: '1'
},
{ changeset_id: '0',
  id: '75598',
  visible: true,
  version: '1'
}];

var wayNodes = [
  { way_id: '73758', node_id: '73759', sequence_id: '1' },
  { way_id: '73758', node_id: '73760', sequence_id: '2' },
  { way_id: '73758', node_id: '73761', sequence_id: '3' },
  { way_id: '73758', node_id: '73762', sequence_id: '4' },
  { way_id: '73758', node_id: '73763', sequence_id: '5' },
  { way_id: '73758', node_id: '73764', sequence_id: '6' },
  { way_id: '73758', node_id: '73765', sequence_id: '7' },
  { way_id: '73758', node_id: '73766', sequence_id: '8' },
  { way_id: '73758', node_id: '73767', sequence_id: '9' },
  { way_id: '73758', node_id: '73768', sequence_id: '10' },
  { way_id: '73758', node_id: '73769', sequence_id: '11' },
  { way_id: '73758', node_id: '73770', sequence_id: '12' },
  { way_id: '73758', node_id: '73771', sequence_id: '13' },
  { way_id: '73758', node_id: '73772', sequence_id: '14' },
  { way_id: '73758', node_id: '73773', sequence_id: '15' },
  { way_id: '73758', node_id: '73774', sequence_id: '16' },
  { way_id: '73758', node_id: '73775', sequence_id: '17' },
  { way_id: '73758', node_id: '73776', sequence_id: '18' },
  { way_id: '73758', node_id: '73777', sequence_id: '19' },
  { way_id: '73758', node_id: '73778', sequence_id: '20' },
  { way_id: '73758', node_id: '73779', sequence_id: '21' },
  { way_id: '73758', node_id: '73780', sequence_id: '22' },
  { way_id: '73758', node_id: '73781', sequence_id: '23' },
  { way_id: '73758', node_id: '73782', sequence_id: '24' },
  { way_id: '73758', node_id: '73783', sequence_id: '25' },
  { way_id: '73758', node_id: '73784', sequence_id: '26' },
  { way_id: '73758', node_id: '73785', sequence_id: '27' },
  { way_id: '73758', node_id: '73786', sequence_id: '28' },
  { way_id: '73758', node_id: '73787', sequence_id: '29' },
  { way_id: '73758', node_id: '73788', sequence_id: '30' },
  { way_id: '73758', node_id: '73789', sequence_id: '31' },
  { way_id: '73758', node_id: '73790', sequence_id: '32' },
  { way_id: '73758', node_id: '73791', sequence_id: '33' },
  { way_id: '73758', node_id: '73792', sequence_id: '34' },
  { way_id: '73758', node_id: '73793', sequence_id: '35' },
  { way_id: '73758', node_id: '73794', sequence_id: '36' },
  { way_id: '73758', node_id: '73795', sequence_id: '37' },
  { way_id: '73758', node_id: '73796', sequence_id: '38' },
  { way_id: '73758', node_id: '73797', sequence_id: '39' },
  { way_id: '73758', node_id: '73798', sequence_id: '40' },
  { way_id: '73758', node_id: '73799', sequence_id: '41' },
  { way_id: '73758', node_id: '73800', sequence_id: '42' },
  { way_id: '73758', node_id: '73801', sequence_id: '43' },
  { way_id: '73758', node_id: '73802', sequence_id: '44' },
  { way_id: '73758', node_id: '73803', sequence_id: '45' },
  { way_id: '73758', node_id: '73804', sequence_id: '46' },
  { way_id: '73758', node_id: '73805', sequence_id: '47' },
  { way_id: '73758', node_id: '73806', sequence_id: '48' },
  { way_id: '73758', node_id: '73807', sequence_id: '49' },
  { way_id: '73758', node_id: '73808', sequence_id: '50' },
  { way_id: '73758', node_id: '73809', sequence_id: '51' },
  { way_id: '73758', node_id: '73810', sequence_id: '52' },
  { way_id: '73758', node_id: '73811', sequence_id: '53' },
  { way_id: '73758', node_id: '73812', sequence_id: '54' },
  { way_id: '73758', node_id: '73813', sequence_id: '55' },
  { way_id: '73758', node_id: '73814', sequence_id: '56' },
  { way_id: '73758', node_id: '73815', sequence_id: '57' },
  { way_id: '73758', node_id: '73816', sequence_id: '58' },
  { way_id: '73758', node_id: '73817', sequence_id: '59' },
  { way_id: '73758', node_id: '73818', sequence_id: '60' },
  { way_id: '73758', node_id: '73819', sequence_id: '61' },
  { way_id: '73758', node_id: '73820', sequence_id: '62' },
  { way_id: '73758', node_id: '73821', sequence_id: '63' },
  { way_id: '73758', node_id: '73822', sequence_id: '64' },
  { way_id: '73758', node_id: '73823', sequence_id: '65' },
  { way_id: '73758', node_id: '73824', sequence_id: '66' },
  { way_id: '73758', node_id: '73825', sequence_id: '67' },
  { way_id: '73826', node_id: '73825', sequence_id: '1' },
  { way_id: '73826', node_id: '73827', sequence_id: '2' },
  { way_id: '73826', node_id: '73828', sequence_id: '3' },
  { way_id: '73826', node_id: '73829', sequence_id: '4' },
  { way_id: '73826', node_id: '73830', sequence_id: '5' },
  { way_id: '73826', node_id: '73831', sequence_id: '6' },
  { way_id: '73826', node_id: '73832', sequence_id: '7' },
  { way_id: '73826', node_id: '73833', sequence_id: '8' },
  { way_id: '73826', node_id: '73834', sequence_id: '9' },
  { way_id: '73826', node_id: '73835', sequence_id: '10' },
  { way_id: '73826', node_id: '73836', sequence_id: '11' },
  { way_id: '73826', node_id: '73837', sequence_id: '12' },
  { way_id: '73826', node_id: '73838', sequence_id: '13' },
  { way_id: '73826', node_id: '73839', sequence_id: '14' },
  { way_id: '73826', node_id: '73840', sequence_id: '15' },
  { way_id: '73826', node_id: '73841', sequence_id: '16' },
  { way_id: '73826', node_id: '73842', sequence_id: '17' },
  { way_id: '73826', node_id: '73843', sequence_id: '18' },
  { way_id: '73826', node_id: '73844', sequence_id: '19' },
  { way_id: '73826', node_id: '73845', sequence_id: '20' },
  { way_id: '73826', node_id: '73846', sequence_id: '21' },
  { way_id: '75340', node_id: '75331', sequence_id: '1' },
  { way_id: '75340', node_id: '75341', sequence_id: '2' },
  { way_id: '75340', node_id: '75342', sequence_id: '3' },
  { way_id: '75340', node_id: '75343', sequence_id: '4' },
  { way_id: '75340', node_id: '75344', sequence_id: '5' },
  { way_id: '75340', node_id: '75345', sequence_id: '6' },
  { way_id: '75340', node_id: '75346', sequence_id: '7' },
  { way_id: '75340', node_id: '75347', sequence_id: '8' },
  { way_id: '75340', node_id: '75348', sequence_id: '9' },
  { way_id: '75340', node_id: '75349', sequence_id: '10' },
  { way_id: '75340', node_id: '75350', sequence_id: '11' },
  { way_id: '75340', node_id: '75351', sequence_id: '12' },
  { way_id: '75340', node_id: '75352', sequence_id: '13' },
  { way_id: '75340', node_id: '75353', sequence_id: '14' },
  { way_id: '75340', node_id: '75354', sequence_id: '15' },
  { way_id: '75340', node_id: '75355', sequence_id: '16' },
  { way_id: '75340', node_id: '75356', sequence_id: '17' },
  { way_id: '75340', node_id: '75357', sequence_id: '18' },
  { way_id: '75340', node_id: '75358', sequence_id: '19' },
  { way_id: '75340', node_id: '75359', sequence_id: '20' },
  { way_id: '75340', node_id: '75360', sequence_id: '21' },
  { way_id: '75340', node_id: '75361', sequence_id: '22' },
  { way_id: '75340', node_id: '75362', sequence_id: '23' },
  { way_id: '75340', node_id: '75363', sequence_id: '24' },
  { way_id: '75340', node_id: '75364', sequence_id: '25' },
  { way_id: '75340', node_id: '75365', sequence_id: '26' },
  { way_id: '75340', node_id: '75366', sequence_id: '27' },
  { way_id: '75340', node_id: '75367', sequence_id: '28' },
  { way_id: '75340', node_id: '75368', sequence_id: '29' },
  { way_id: '75340', node_id: '75369', sequence_id: '30' },
  { way_id: '75340', node_id: '75370', sequence_id: '31' },
  { way_id: '75340', node_id: '75371', sequence_id: '32' },
  { way_id: '75340', node_id: '75372', sequence_id: '33' },
  { way_id: '75340', node_id: '75373', sequence_id: '34' },
  { way_id: '75340', node_id: '75374', sequence_id: '35' },
  { way_id: '75340', node_id: '75375', sequence_id: '36' },
  { way_id: '75340', node_id: '75376', sequence_id: '37' },
  { way_id: '75340', node_id: '75377', sequence_id: '38' },
  { way_id: '75340', node_id: '75378', sequence_id: '39' },
  { way_id: '75340', node_id: '75379', sequence_id: '40' },
  { way_id: '75340', node_id: '75380', sequence_id: '41' },
  { way_id: '75340', node_id: '75381', sequence_id: '42' },
  { way_id: '75340', node_id: '75382', sequence_id: '43' },
  { way_id: '75340', node_id: '75383', sequence_id: '44' },
  { way_id: '75340', node_id: '75384', sequence_id: '45' },
  { way_id: '75340', node_id: '75385', sequence_id: '46' },
  { way_id: '75340', node_id: '75386', sequence_id: '47' },
  { way_id: '75340', node_id: '75387', sequence_id: '48' },
  { way_id: '75340', node_id: '75388', sequence_id: '49' },
  { way_id: '75340', node_id: '75389', sequence_id: '50' },
  { way_id: '75340', node_id: '75390', sequence_id: '51' },
  { way_id: '75340', node_id: '75391', sequence_id: '52' },
  { way_id: '75340', node_id: '75392', sequence_id: '53' },
  { way_id: '75340', node_id: '75393', sequence_id: '54' },
  { way_id: '75340', node_id: '75394', sequence_id: '55' },
  { way_id: '75340', node_id: '75395', sequence_id: '56' },
  { way_id: '75340', node_id: '75396', sequence_id: '57' },
  { way_id: '75340', node_id: '75397', sequence_id: '58' },
  { way_id: '75340', node_id: '75398', sequence_id: '59' },
  { way_id: '75340', node_id: '75399', sequence_id: '60' },
  { way_id: '75340', node_id: '75400', sequence_id: '61' },
  { way_id: '75340', node_id: '75401', sequence_id: '62' },
  { way_id: '75340', node_id: '75402', sequence_id: '63' },
  { way_id: '75340', node_id: '75403', sequence_id: '64' },
  { way_id: '75340', node_id: '75404', sequence_id: '65' },
  { way_id: '75340', node_id: '75405', sequence_id: '66' },
  { way_id: '75340', node_id: '75406', sequence_id: '67' },
  { way_id: '75340', node_id: '75407', sequence_id: '68' },
  { way_id: '75340', node_id: '75408', sequence_id: '69' },
  { way_id: '75340', node_id: '75409', sequence_id: '70' },
  { way_id: '75340', node_id: '75410', sequence_id: '71' },
  { way_id: '75340', node_id: '75411', sequence_id: '72' },
  { way_id: '75340', node_id: '75412', sequence_id: '73' },
  { way_id: '75340', node_id: '75413', sequence_id: '74' },
  { way_id: '75340', node_id: '75414', sequence_id: '75' },
  { way_id: '75340', node_id: '75415', sequence_id: '76' },
  { way_id: '75340', node_id: '75416', sequence_id: '77' },
  { way_id: '75340', node_id: '75417', sequence_id: '78' },
  { way_id: '75340', node_id: '75418', sequence_id: '79' },
  { way_id: '75340', node_id: '75419', sequence_id: '80' },
  { way_id: '75340', node_id: '75420', sequence_id: '81' },
  { way_id: '75340', node_id: '75421', sequence_id: '82' },
  { way_id: '75340', node_id: '75422', sequence_id: '83' },
  { way_id: '75340', node_id: '75423', sequence_id: '84' },
  { way_id: '75340', node_id: '75424', sequence_id: '85' },
  { way_id: '75340', node_id: '75425', sequence_id: '86' },
  { way_id: '75340', node_id: '75426', sequence_id: '87' },
  { way_id: '75340', node_id: '75427', sequence_id: '88' },
  { way_id: '75340', node_id: '75428', sequence_id: '89' },
  { way_id: '75340', node_id: '75429', sequence_id: '90' },
  { way_id: '75340', node_id: '75430', sequence_id: '91' },
  { way_id: '75340', node_id: '75431', sequence_id: '92' },
  { way_id: '75340', node_id: '75432', sequence_id: '93' },
  { way_id: '75340', node_id: '75433', sequence_id: '94' },
  { way_id: '75340', node_id: '75434', sequence_id: '95' },
  { way_id: '75340', node_id: '75435', sequence_id: '96' },
  { way_id: '75340', node_id: '75436', sequence_id: '97' },
  { way_id: '75340', node_id: '75437', sequence_id: '98' },
  { way_id: '75340', node_id: '75438', sequence_id: '99' },
  { way_id: '75340', node_id: '75439', sequence_id: '100' },
  { way_id: '75340', node_id: '75440', sequence_id: '101' },
  { way_id: '75340', node_id: '75441', sequence_id: '102' },
  { way_id: '75340', node_id: '75442', sequence_id: '103' },
  { way_id: '75340', node_id: '75443', sequence_id: '104' },
  { way_id: '75340', node_id: '75444', sequence_id: '105' },
  { way_id: '75340', node_id: '75445', sequence_id: '106' },
  { way_id: '75340', node_id: '75446', sequence_id: '107' },
  { way_id: '75340', node_id: '75447', sequence_id: '108' },
  { way_id: '75340', node_id: '75448', sequence_id: '109' },
  { way_id: '75340', node_id: '75449', sequence_id: '110' },
  { way_id: '75340', node_id: '75450', sequence_id: '111' },
  { way_id: '75574', node_id: '75339', sequence_id: '1' },
  { way_id: '75574', node_id: '75575', sequence_id: '2' },
  { way_id: '75574', node_id: '75576', sequence_id: '3' },
  { way_id: '75574', node_id: '75577', sequence_id: '4' },
  { way_id: '75574', node_id: '75578', sequence_id: '5' },
  { way_id: '75574', node_id: '75579', sequence_id: '6' },
  { way_id: '75574', node_id: '75580', sequence_id: '7' },
  { way_id: '75574', node_id: '75581', sequence_id: '8' },
  { way_id: '75574', node_id: '75582', sequence_id: '9' },
  { way_id: '75574', node_id: '75583', sequence_id: '10' },
  { way_id: '75574', node_id: '75584', sequence_id: '11' },
  { way_id: '75574', node_id: '75585', sequence_id: '12' },
  { way_id: '75574', node_id: '75586', sequence_id: '13' },
  { way_id: '75574', node_id: '75587', sequence_id: '14' },
  { way_id: '75574', node_id: '75588', sequence_id: '15' },
  { way_id: '75574', node_id: '75589', sequence_id: '16' },
  { way_id: '75574', node_id: '75590', sequence_id: '17' },
  { way_id: '75574', node_id: '75591', sequence_id: '18' },
  { way_id: '75574', node_id: '75592', sequence_id: '19' },
  { way_id: '75574', node_id: '75593', sequence_id: '20' },
  { way_id: '75574', node_id: '75594', sequence_id: '21' },
  { way_id: '75574', node_id: '73759', sequence_id: '22' },
  { way_id: '75598', node_id: '75573', sequence_id: '1' },
  { way_id: '75598', node_id: '75599', sequence_id: '2' },
  { way_id: '75598', node_id: '75600', sequence_id: '3' },
  { way_id: '75598', node_id: '75601', sequence_id: '4' },
  { way_id: '75598', node_id: '75602', sequence_id: '5' },
  { way_id: '75598', node_id: '75603', sequence_id: '6' },
  { way_id: '75598', node_id: '75604', sequence_id: '7' },
  { way_id: '75598', node_id: '75605', sequence_id: '8' },
  { way_id: '75598', node_id: '75606', sequence_id: '9' },
  { way_id: '75598', node_id: '75607', sequence_id: '10' },
  { way_id: '75598', node_id: '75608', sequence_id: '11' },
  { way_id: '75598', node_id: '75609', sequence_id: '12' },
  { way_id: '75598', node_id: '75610', sequence_id: '13' },
  { way_id: '75598', node_id: '75611', sequence_id: '14' },
  { way_id: '75598', node_id: '75612', sequence_id: '15' },
  { way_id: '75598', node_id: '75613', sequence_id: '16' },
  { way_id: '75598', node_id: '75614', sequence_id: '17' },
  { way_id: '75598', node_id: '75615', sequence_id: '18' },
  { way_id: '75598', node_id: '75616', sequence_id: '19' },
  { way_id: '75598', node_id: '75617', sequence_id: '20' },
  { way_id: '75598', node_id: '75618', sequence_id: '21' },
  { way_id: '75598', node_id: '75619', sequence_id: '22' },
  { way_id: '75598', node_id: '75620', sequence_id: '23' },
  { way_id: '75598', node_id: '75621', sequence_id: '24' },
  { way_id: '75598', node_id: '75622', sequence_id: '25' },
  { way_id: '75598', node_id: '75623', sequence_id: '26' },
  { way_id: '75598', node_id: '75624', sequence_id: '27' },
  { way_id: '75598', node_id: '75625', sequence_id: '28' },
  { way_id: '75598', node_id: '75626', sequence_id: '29' },
  { way_id: '75598', node_id: '75627', sequence_id: '30' },
  { way_id: '75598', node_id: '75628', sequence_id: '31' },
  { way_id: '75598', node_id: '75629', sequence_id: '32' },
  { way_id: '75598', node_id: '75630', sequence_id: '33' },
  { way_id: '75598', node_id: '75631', sequence_id: '34' },
  { way_id: '75598', node_id: '75632', sequence_id: '35' },
  { way_id: '75598', node_id: '75633', sequence_id: '36' },
  { way_id: '75598', node_id: '75634', sequence_id: '37' },
  { way_id: '75598', node_id: '75635', sequence_id: '38' },
  { way_id: '75598', node_id: '75636', sequence_id: '39' },
  { way_id: '75598', node_id: '75637', sequence_id: '40' },
  { way_id: '75598', node_id: '75638', sequence_id: '41' },
  { way_id: '75598', node_id: '75639', sequence_id: '42' }
];

var result = [ { changeset_id: '0',
    id: '73758',
    visible: true,
    version: '1',
    nodes:
     [ { way_id: '73758', node_id: '73759', sequence_id: '1' },
       { way_id: '73758', node_id: '73760', sequence_id: '2' },
       { way_id: '73758', node_id: '73761', sequence_id: '3' },
       { way_id: '73758', node_id: '73762', sequence_id: '4' },
       { way_id: '73758', node_id: '73763', sequence_id: '5' },
       { way_id: '73758', node_id: '73764', sequence_id: '6' },
       { way_id: '73758', node_id: '73765', sequence_id: '7' },
       { way_id: '73758', node_id: '73766', sequence_id: '8' },
       { way_id: '73758', node_id: '73767', sequence_id: '9' },
       { way_id: '73758', node_id: '73768', sequence_id: '10' },
       { way_id: '73758', node_id: '73769', sequence_id: '11' },
       { way_id: '73758', node_id: '73770', sequence_id: '12' },
       { way_id: '73758', node_id: '73771', sequence_id: '13' },
       { way_id: '73758', node_id: '73772', sequence_id: '14' },
       { way_id: '73758', node_id: '73773', sequence_id: '15' },
       { way_id: '73758', node_id: '73774', sequence_id: '16' },
       { way_id: '73758', node_id: '73775', sequence_id: '17' },
       { way_id: '73758', node_id: '73776', sequence_id: '18' },
       { way_id: '73758', node_id: '73777', sequence_id: '19' },
       { way_id: '73758', node_id: '73778', sequence_id: '20' },
       { way_id: '73758', node_id: '73779', sequence_id: '21' },
       { way_id: '73758', node_id: '73780', sequence_id: '22' },
       { way_id: '73758', node_id: '73781', sequence_id: '23' },
       { way_id: '73758', node_id: '73782', sequence_id: '24' },
       { way_id: '73758', node_id: '73783', sequence_id: '25' },
       { way_id: '73758', node_id: '73784', sequence_id: '26' },
       { way_id: '73758', node_id: '73785', sequence_id: '27' },
       { way_id: '73758', node_id: '73786', sequence_id: '28' },
       { way_id: '73758', node_id: '73787', sequence_id: '29' },
       { way_id: '73758', node_id: '73788', sequence_id: '30' },
       { way_id: '73758', node_id: '73789', sequence_id: '31' },
       { way_id: '73758', node_id: '73790', sequence_id: '32' },
       { way_id: '73758', node_id: '73791', sequence_id: '33' },
       { way_id: '73758', node_id: '73792', sequence_id: '34' },
       { way_id: '73758', node_id: '73793', sequence_id: '35' },
       { way_id: '73758', node_id: '73794', sequence_id: '36' },
       { way_id: '73758', node_id: '73795', sequence_id: '37' },
       { way_id: '73758', node_id: '73796', sequence_id: '38' },
       { way_id: '73758', node_id: '73797', sequence_id: '39' },
       { way_id: '73758', node_id: '73798', sequence_id: '40' },
       { way_id: '73758', node_id: '73799', sequence_id: '41' },
       { way_id: '73758', node_id: '73800', sequence_id: '42' },
       { way_id: '73758', node_id: '73801', sequence_id: '43' },
       { way_id: '73758', node_id: '73802', sequence_id: '44' },
       { way_id: '73758', node_id: '73803', sequence_id: '45' },
       { way_id: '73758', node_id: '73804', sequence_id: '46' },
       { way_id: '73758', node_id: '73805', sequence_id: '47' },
       { way_id: '73758', node_id: '73806', sequence_id: '48' },
       { way_id: '73758', node_id: '73807', sequence_id: '49' },
       { way_id: '73758', node_id: '73808', sequence_id: '50' },
       { way_id: '73758', node_id: '73809', sequence_id: '51' },
       { way_id: '73758', node_id: '73810', sequence_id: '52' },
       { way_id: '73758', node_id: '73811', sequence_id: '53' },
       { way_id: '73758', node_id: '73812', sequence_id: '54' },
       { way_id: '73758', node_id: '73813', sequence_id: '55' },
       { way_id: '73758', node_id: '73814', sequence_id: '56' },
       { way_id: '73758', node_id: '73815', sequence_id: '57' },
       { way_id: '73758', node_id: '73816', sequence_id: '58' },
       { way_id: '73758', node_id: '73817', sequence_id: '59' },
       { way_id: '73758', node_id: '73818', sequence_id: '60' },
       { way_id: '73758', node_id: '73819', sequence_id: '61' },
       { way_id: '73758', node_id: '73820', sequence_id: '62' },
       { way_id: '73758', node_id: '73821', sequence_id: '63' },
       { way_id: '73758', node_id: '73822', sequence_id: '64' },
       { way_id: '73758', node_id: '73823', sequence_id: '65' },
       { way_id: '73758', node_id: '73824', sequence_id: '66' },
       { way_id: '73758', node_id: '73825', sequence_id: '67' } ] },
  { changeset_id: '0',
    id: '73826',
    visible: true,
    version: '1',
    nodes:
     [ { way_id: '73826', node_id: '73825', sequence_id: '1' },
       { way_id: '73826', node_id: '73827', sequence_id: '2' },
       { way_id: '73826', node_id: '73828', sequence_id: '3' },
       { way_id: '73826', node_id: '73829', sequence_id: '4' },
       { way_id: '73826', node_id: '73830', sequence_id: '5' },
       { way_id: '73826', node_id: '73831', sequence_id: '6' },
       { way_id: '73826', node_id: '73832', sequence_id: '7' },
       { way_id: '73826', node_id: '73833', sequence_id: '8' },
       { way_id: '73826', node_id: '73834', sequence_id: '9' },
       { way_id: '73826', node_id: '73835', sequence_id: '10' },
       { way_id: '73826', node_id: '73836', sequence_id: '11' },
       { way_id: '73826', node_id: '73837', sequence_id: '12' },
       { way_id: '73826', node_id: '73838', sequence_id: '13' },
       { way_id: '73826', node_id: '73839', sequence_id: '14' },
       { way_id: '73826', node_id: '73840', sequence_id: '15' },
       { way_id: '73826', node_id: '73841', sequence_id: '16' },
       { way_id: '73826', node_id: '73842', sequence_id: '17' },
       { way_id: '73826', node_id: '73843', sequence_id: '18' },
       { way_id: '73826', node_id: '73844', sequence_id: '19' },
       { way_id: '73826', node_id: '73845', sequence_id: '20' },
       { way_id: '73826', node_id: '73846', sequence_id: '21' } ] },
  { changeset_id: '0',
    id: '75340',
    visible: true,
    version: '1',
    nodes:
     [ { way_id: '75340', node_id: '75331', sequence_id: '1' },
       { way_id: '75340', node_id: '75341', sequence_id: '2' },
       { way_id: '75340', node_id: '75342', sequence_id: '3' },
       { way_id: '75340', node_id: '75343', sequence_id: '4' },
       { way_id: '75340', node_id: '75344', sequence_id: '5' },
       { way_id: '75340', node_id: '75345', sequence_id: '6' },
       { way_id: '75340', node_id: '75346', sequence_id: '7' },
       { way_id: '75340', node_id: '75347', sequence_id: '8' },
       { way_id: '75340', node_id: '75348', sequence_id: '9' },
       { way_id: '75340', node_id: '75349', sequence_id: '10' },
       { way_id: '75340', node_id: '75350', sequence_id: '11' },
       { way_id: '75340', node_id: '75351', sequence_id: '12' },
       { way_id: '75340', node_id: '75352', sequence_id: '13' },
       { way_id: '75340', node_id: '75353', sequence_id: '14' },
       { way_id: '75340', node_id: '75354', sequence_id: '15' },
       { way_id: '75340', node_id: '75355', sequence_id: '16' },
       { way_id: '75340', node_id: '75356', sequence_id: '17' },
       { way_id: '75340', node_id: '75357', sequence_id: '18' },
       { way_id: '75340', node_id: '75358', sequence_id: '19' },
       { way_id: '75340', node_id: '75359', sequence_id: '20' },
       { way_id: '75340', node_id: '75360', sequence_id: '21' },
       { way_id: '75340', node_id: '75361', sequence_id: '22' },
       { way_id: '75340', node_id: '75362', sequence_id: '23' },
       { way_id: '75340', node_id: '75363', sequence_id: '24' },
       { way_id: '75340', node_id: '75364', sequence_id: '25' },
       { way_id: '75340', node_id: '75365', sequence_id: '26' },
       { way_id: '75340', node_id: '75366', sequence_id: '27' },
       { way_id: '75340', node_id: '75367', sequence_id: '28' },
       { way_id: '75340', node_id: '75368', sequence_id: '29' },
       { way_id: '75340', node_id: '75369', sequence_id: '30' },
       { way_id: '75340', node_id: '75370', sequence_id: '31' },
       { way_id: '75340', node_id: '75371', sequence_id: '32' },
       { way_id: '75340', node_id: '75372', sequence_id: '33' },
       { way_id: '75340', node_id: '75373', sequence_id: '34' },
       { way_id: '75340', node_id: '75374', sequence_id: '35' },
       { way_id: '75340', node_id: '75375', sequence_id: '36' },
       { way_id: '75340', node_id: '75376', sequence_id: '37' },
       { way_id: '75340', node_id: '75377', sequence_id: '38' },
       { way_id: '75340', node_id: '75378', sequence_id: '39' },
       { way_id: '75340', node_id: '75379', sequence_id: '40' },
       { way_id: '75340', node_id: '75380', sequence_id: '41' },
       { way_id: '75340', node_id: '75381', sequence_id: '42' },
       { way_id: '75340', node_id: '75382', sequence_id: '43' },
       { way_id: '75340', node_id: '75383', sequence_id: '44' },
       { way_id: '75340', node_id: '75384', sequence_id: '45' },
       { way_id: '75340', node_id: '75385', sequence_id: '46' },
       { way_id: '75340', node_id: '75386', sequence_id: '47' },
       { way_id: '75340', node_id: '75387', sequence_id: '48' },
       { way_id: '75340', node_id: '75388', sequence_id: '49' },
       { way_id: '75340', node_id: '75389', sequence_id: '50' },
       { way_id: '75340', node_id: '75390', sequence_id: '51' },
       { way_id: '75340', node_id: '75391', sequence_id: '52' },
       { way_id: '75340', node_id: '75392', sequence_id: '53' },
       { way_id: '75340', node_id: '75393', sequence_id: '54' },
       { way_id: '75340', node_id: '75394', sequence_id: '55' },
       { way_id: '75340', node_id: '75395', sequence_id: '56' },
       { way_id: '75340', node_id: '75396', sequence_id: '57' },
       { way_id: '75340', node_id: '75397', sequence_id: '58' },
       { way_id: '75340', node_id: '75398', sequence_id: '59' },
       { way_id: '75340', node_id: '75399', sequence_id: '60' },
       { way_id: '75340', node_id: '75400', sequence_id: '61' },
       { way_id: '75340', node_id: '75401', sequence_id: '62' },
       { way_id: '75340', node_id: '75402', sequence_id: '63' },
       { way_id: '75340', node_id: '75403', sequence_id: '64' },
       { way_id: '75340', node_id: '75404', sequence_id: '65' },
       { way_id: '75340', node_id: '75405', sequence_id: '66' },
       { way_id: '75340', node_id: '75406', sequence_id: '67' },
       { way_id: '75340', node_id: '75407', sequence_id: '68' },
       { way_id: '75340', node_id: '75408', sequence_id: '69' },
       { way_id: '75340', node_id: '75409', sequence_id: '70' },
       { way_id: '75340', node_id: '75410', sequence_id: '71' },
       { way_id: '75340', node_id: '75411', sequence_id: '72' },
       { way_id: '75340', node_id: '75412', sequence_id: '73' },
       { way_id: '75340', node_id: '75413', sequence_id: '74' },
       { way_id: '75340', node_id: '75414', sequence_id: '75' },
       { way_id: '75340', node_id: '75415', sequence_id: '76' },
       { way_id: '75340', node_id: '75416', sequence_id: '77' },
       { way_id: '75340', node_id: '75417', sequence_id: '78' },
       { way_id: '75340', node_id: '75418', sequence_id: '79' },
       { way_id: '75340', node_id: '75419', sequence_id: '80' },
       { way_id: '75340', node_id: '75420', sequence_id: '81' },
       { way_id: '75340', node_id: '75421', sequence_id: '82' },
       { way_id: '75340', node_id: '75422', sequence_id: '83' },
       { way_id: '75340', node_id: '75423', sequence_id: '84' },
       { way_id: '75340', node_id: '75424', sequence_id: '85' },
       { way_id: '75340', node_id: '75425', sequence_id: '86' },
       { way_id: '75340', node_id: '75426', sequence_id: '87' },
       { way_id: '75340', node_id: '75427', sequence_id: '88' },
       { way_id: '75340', node_id: '75428', sequence_id: '89' },
       { way_id: '75340', node_id: '75429', sequence_id: '90' },
       { way_id: '75340', node_id: '75430', sequence_id: '91' },
       { way_id: '75340', node_id: '75431', sequence_id: '92' },
       { way_id: '75340', node_id: '75432', sequence_id: '93' },
       { way_id: '75340', node_id: '75433', sequence_id: '94' },
       { way_id: '75340', node_id: '75434', sequence_id: '95' },
       { way_id: '75340', node_id: '75435', sequence_id: '96' },
       { way_id: '75340', node_id: '75436', sequence_id: '97' },
       { way_id: '75340', node_id: '75437', sequence_id: '98' },
       { way_id: '75340', node_id: '75438', sequence_id: '99' },
       { way_id: '75340', node_id: '75439', sequence_id: '100' },
       { way_id: '75340', node_id: '75440', sequence_id: '101' },
       { way_id: '75340', node_id: '75441', sequence_id: '102' },
       { way_id: '75340', node_id: '75442', sequence_id: '103' },
       { way_id: '75340', node_id: '75443', sequence_id: '104' },
       { way_id: '75340', node_id: '75444', sequence_id: '105' },
       { way_id: '75340', node_id: '75445', sequence_id: '106' },
       { way_id: '75340', node_id: '75446', sequence_id: '107' },
       { way_id: '75340', node_id: '75447', sequence_id: '108' },
       { way_id: '75340', node_id: '75448', sequence_id: '109' },
       { way_id: '75340', node_id: '75449', sequence_id: '110' },
       { way_id: '75340', node_id: '75450', sequence_id: '111' } ] },
  { changeset_id: '0',
    id: '75574',
    visible: true,
    version: '1',
    nodes:
     [ { way_id: '75574', node_id: '75339', sequence_id: '1' },
       { way_id: '75574', node_id: '75575', sequence_id: '2' },
       { way_id: '75574', node_id: '75576', sequence_id: '3' },
       { way_id: '75574', node_id: '75577', sequence_id: '4' },
       { way_id: '75574', node_id: '75578', sequence_id: '5' },
       { way_id: '75574', node_id: '75579', sequence_id: '6' },
       { way_id: '75574', node_id: '75580', sequence_id: '7' },
       { way_id: '75574', node_id: '75581', sequence_id: '8' },
       { way_id: '75574', node_id: '75582', sequence_id: '9' },
       { way_id: '75574', node_id: '75583', sequence_id: '10' },
       { way_id: '75574', node_id: '75584', sequence_id: '11' },
       { way_id: '75574', node_id: '75585', sequence_id: '12' },
       { way_id: '75574', node_id: '75586', sequence_id: '13' },
       { way_id: '75574', node_id: '75587', sequence_id: '14' },
       { way_id: '75574', node_id: '75588', sequence_id: '15' },
       { way_id: '75574', node_id: '75589', sequence_id: '16' },
       { way_id: '75574', node_id: '75590', sequence_id: '17' },
       { way_id: '75574', node_id: '75591', sequence_id: '18' },
       { way_id: '75574', node_id: '75592', sequence_id: '19' },
       { way_id: '75574', node_id: '75593', sequence_id: '20' },
       { way_id: '75574', node_id: '75594', sequence_id: '21' },
       { way_id: '75574', node_id: '73759', sequence_id: '22' } ] },
  { changeset_id: '0',
    id: '75598',
    visible: true,
    version: '1',
    nodes:
     [ { way_id: '75598', node_id: '75573', sequence_id: '1' },
       { way_id: '75598', node_id: '75599', sequence_id: '2' },
       { way_id: '75598', node_id: '75600', sequence_id: '3' },
       { way_id: '75598', node_id: '75601', sequence_id: '4' },
       { way_id: '75598', node_id: '75602', sequence_id: '5' },
       { way_id: '75598', node_id: '75603', sequence_id: '6' },
       { way_id: '75598', node_id: '75604', sequence_id: '7' },
       { way_id: '75598', node_id: '75605', sequence_id: '8' },
       { way_id: '75598', node_id: '75606', sequence_id: '9' },
       { way_id: '75598', node_id: '75607', sequence_id: '10' },
       { way_id: '75598', node_id: '75608', sequence_id: '11' },
       { way_id: '75598', node_id: '75609', sequence_id: '12' },
       { way_id: '75598', node_id: '75610', sequence_id: '13' },
       { way_id: '75598', node_id: '75611', sequence_id: '14' },
       { way_id: '75598', node_id: '75612', sequence_id: '15' },
       { way_id: '75598', node_id: '75613', sequence_id: '16' },
       { way_id: '75598', node_id: '75614', sequence_id: '17' },
       { way_id: '75598', node_id: '75615', sequence_id: '18' },
       { way_id: '75598', node_id: '75616', sequence_id: '19' },
       { way_id: '75598', node_id: '75617', sequence_id: '20' },
       { way_id: '75598', node_id: '75618', sequence_id: '21' },
       { way_id: '75598', node_id: '75619', sequence_id: '22' },
       { way_id: '75598', node_id: '75620', sequence_id: '23' },
       { way_id: '75598', node_id: '75621', sequence_id: '24' },
       { way_id: '75598', node_id: '75622', sequence_id: '25' },
       { way_id: '75598', node_id: '75623', sequence_id: '26' },
       { way_id: '75598', node_id: '75624', sequence_id: '27' },
       { way_id: '75598', node_id: '75625', sequence_id: '28' },
       { way_id: '75598', node_id: '75626', sequence_id: '29' },
       { way_id: '75598', node_id: '75627', sequence_id: '30' },
       { way_id: '75598', node_id: '75628', sequence_id: '31' },
       { way_id: '75598', node_id: '75629', sequence_id: '32' },
       { way_id: '75598', node_id: '75630', sequence_id: '33' },
       { way_id: '75598', node_id: '75631', sequence_id: '34' },
       { way_id: '75598', node_id: '75632', sequence_id: '35' },
       { way_id: '75598', node_id: '75633', sequence_id: '36' },
       { way_id: '75598', node_id: '75634', sequence_id: '37' },
       { way_id: '75598', node_id: '75635', sequence_id: '38' },
       { way_id: '75598', node_id: '75636', sequence_id: '39' },
       { way_id: '75598', node_id: '75637', sequence_id: '40' },
       { way_id: '75598', node_id: '75638', sequence_id: '41' },
       { way_id: '75598', node_id: '75639', sequence_id: '42' } ] } ];

module.exports = {
    ways: ways,
    wayNodes: wayNodes,
    result: result
};