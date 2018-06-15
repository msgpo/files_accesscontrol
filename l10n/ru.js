OC.L10N.register(
    "files_accesscontrol",
    {
    "No rule given" : "Правило не задано",
    "File access control" : "Контроль доступа к файлам",
    "Restrict access to files based on factors such as filetype, user group memberships, time and more." : "Ограничивать доступ к файлам на основе таких факторов, как тип файла, членство пользователя в группах, время и многое другое.",
    "Each rule group consists of one or more rules. A request matches a group if all rules evaluate to true. If a request matches at least one of the defined groups, the request is blocked and the file content can not be read or written." : "Каждая группа правил состоит из одного или более правил. Запрос соответствует группе только если верно каждое из правил. Если запрос совпадает хотя бы с одной из заданных групп, то он блокируется и содержимое файла не может быть прочитано или записано. ",
    "Control access to files based on conditions" : "Доступ к файлам на основании условий",
    "Nextcloud's File Access Control app enables administrators to protect data from unauthorized access or modifications.\n\n## How it works\nThe administrator can create and manage a set of rule groups. Each of the rule groups consists of one or more rules. If all rules of a group hold true, the group matches the request and access is being denied or the upload is blocked. The rules criteria range from IP address, mimetype and request time to group membership, tags, user agent and more.\n\t\t\nAn example would be to deny access to MS Excel/XLSX files owned by the \"Human Resources\" group accessed from an IP not on the internal company network or to block uploads of files bigger than 512 mb by students in the \"1st year\" group.\n\t\nLearn more about File Access Control on [https://nextcloud.com/workflow](https://nextcloud.com/workflow)" : "Приложение «Управление доступом к файлам» служит для настройки администраторами правил защиты файлов от неавторизованного доступа или изменения.\n\n## Принцип работы\nАдминистратор может создавать и управлять группами наборов правил. Каждая группа правил состоит из одного или более правил. При выполнении каждого из правил группы, группа правил считается совпавшей с запросом и выполняется блокирование доступа или запрещается передачу файла на сервер. Критериями правил могут являться IP-адреса, MIME-типы файлов, время запроса, участие пользователя в группах, метки файлов, строки user-agent и многое другое.\n\nПримером может служить запрет доступа к файлам MS Excel/XLSX, владельцем которых является отдел персонала для всех IP-адресов, не принадлежащих внутренней сети компании, либо запрет передачи на сервер файлов размером более 512 Мб для студентов из группы «I курс».\n\nДополнительная информация об «Управлении доступом к файлам» — [https://nextcloud.com/workflow](https://nextcloud.com/workflow)"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
