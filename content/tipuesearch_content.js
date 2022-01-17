var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 你的學號 \n 網站倉儲:  https://github.com/mdecourse/cad2021_hw \n 網站連結:  https://mde.tw/cad2021_hw \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'Solidworks', 'text': 'SolidWorks是達梭系統（Dassault Systemes S.A.）旗下的SolidWorks公司開發的，運行在微軟Windows平台下的3D機械CAD軟體。 \n SolidWorks是熱門的CAD軟體之一， 是產品設計師和機械工程師使用的軟體，全世界其用戶範圍從個人到大公司，涵蓋非常廣泛的橫截面製造業細分市場。商業銷售是通過間接渠道，其中包括遍及世界各地的交易商和合作夥伴。 \n', 'tags': '', 'url': 'Solidworks.html'}, {'title': 'SolidWorks安裝方法', 'text': '\n \n', 'tags': '', 'url': 'SolidWorks安裝方法.html'}, {'title': 'Solidworks操作方法', 'text': '\n \n', 'tags': '', 'url': 'Solidworks操作方法.html'}, {'title': 'Solvespace', 'text': 'Solvespace是一個免費和開源的2D和3D CAD程序。它是一個基於約束的參數建模器，具有簡單的機械仿真功能。2.1 及更高版本在 Windows、Linux 和 macOS 上運行。 \n 2013 年在Libre Graphics World 上發表了對開發人員的簡短評論和採訪。這篇評論讚揚了Solvespace 的小型可執行文件、高級約束求解器和輸出格式範圍。同一篇評論指出了一些缺點，主要是它對 NURBS 布爾值的緩慢和有限的處理以及缺乏原生 Linux 支持。 但是，此後添加了本機 Linux 支持。 \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'Solvespace安裝方法', 'text': '\n \n', 'tags': '', 'url': 'Solvespace安裝方法.html'}, {'title': 'Solvespace操作方法', 'text': '\n \n', 'tags': '', 'url': 'Solvespace操作方法.html'}, {'title': '運動場景', 'text': '', 'tags': '', 'url': '運動場景.html'}, {'title': 'Solidworks轉入', 'text': '\n Solidworks 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n \n', 'tags': '', 'url': 'Solidworks轉入.html'}, {'title': 'Solvespace轉入', 'text': '\n Solvespace 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n \n', 'tags': '', 'url': 'Solvespace轉入.html'}, {'title': 'W13', 'text': '1. 零組件繪圖進度 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ------------------------------------------------------------------------------------------------------- \n 2.機械手臂第一軸(360度旋轉) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ------------------------------------------------------------------------------------------------------- \n 3.機械手臂一到三軸(UI介面控制) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': '下載零件', 'text': '零件1 /downloads/零件50.STL \n 零件2 /downloads/零件60.STL \n 零件3 /downloads/零件70.STL \n 零件4 /downloads/零件80.STL \n', 'tags': '', 'url': '下載零件.html'}, {'title': '繪圖過程wink', 'text': 'solidworks和solvespace的 繪圖過程 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '繪圖過程wink.html'}, {'title': '模擬場景wink', 'text': '四連桿在CoppeliaSim裡的模擬 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n', 'tags': '', 'url': '模擬場景wink.html'}, {'title': '課堂測驗', 'text': '', 'tags': '', 'url': '課堂測驗.html'}, {'title': '2022-01-03', 'text': '零件繪製(Solidworks) \n \n \n UI介面控制 \n \n', 'tags': '', 'url': '2022-01-03.html'}, {'title': '2022-01-10', 'text': '\n 努力專研中', 'tags': '', 'url': '2022-01-10.html'}, {'title': '遇到的問題', 'text': '第一次上課的時候，老師說了很多有關網路連線的做法，但是當時的我連老師傳上課訊息的網址，還有上課要用到的一些檔案也還沒下載，還好詢問同學和老師的時候都有得到解決方法。 \n 上課使用的網站: mde.tw \n 在mde.tw裡可以下載 CoppeliaSim \n \n \n 抽取到的繪圖程式能從這邊下載 https://mde.tw/cad2021/content/HW_template.html \n \n ------------------------------------------------------------------------------------------------------- \n 某些作業老師規定要使用wink拍攝，第一次使用wink拍好內容要編譯成影片的時候都會跑出錯誤，後來詢問同學才發現設定檔有漏掉東西 \n 要有下圖這串連結才能編譯影片 \n \n \n 首先要下載ShareX \n \n \n 接著點選  任務設定 -> 螢幕錄製 -> 螢幕錄製選項 ，然後再FFmppeg點選 下載 \n \n \n 下載完成之後就到檔案總管找到 ShareX 的資料夾，打開後接著打開 Tools 的資料夾 \n \n \n 最後把路徑複製下來貼到wink裡就可以編譯影片 \n \n \n', 'tags': '', 'url': '遇到的問題.html'}, {'title': '期末總結', 'text': '編輯倉儲 \n 到檔案總管打開 cad2021 並打開 start_ipv6.bat \n \n \n \n 開啟後會出現4個小黑框 \n \n \n \n 在裡面依序輸入指令: \n 1-cd tmp \n 2-cd cad2021_hw \n 3-cms \n \n \n 之後會跑出一串網址，把它複製下來貼到google上 \n \n \n 接著就會跑出動態網站 \n \n 點選Login，並輸入密碼: admin \n \n 接著就可以進行編輯了 \n \n \n 編輯好了之後要推送到靜態倉儲要點選 generate_pages \n \n 之後打開一個新的小黑框，在裡面依序輸入指令: \n 1-cd tmp \n 2-cd cad2021_hw \n 3-acp "檔案名稱" \n ( *記得空格也要輸入 ) \n \n \n 這樣就完成編輯倉儲了 \n -------------------------------------------------------------------------------------------------- \n Wink \n 在這學期某些作業老師規定要使用wink拍攝，所以也學會了如何使用wink \n wink能手動擷取畫面也能定時擷取畫面 \n \n \n wink 擷取畫面時能使用鍵盤快捷鍵 \n 擷取一張畫面:Pause \n 定時擷取畫面:Shift+Pause \n 鍵盤滑鼠擷取:Alt+Pause \n \n \n 第一次使用wink遇到的問題 \n 使用wink拍好內容要編譯成影片的時候都會跑出錯誤，後來詢問同學才發現設定檔有漏掉東西 \n 要有下圖這串連結才能編譯影片 \n \n \n 解決方法 \n 首先要下載 ShareX \n \n \n 接著點選  任務設定 -> 螢幕錄製 -> 螢幕錄製選項 ，然後再FFmppeg點選 下載 \n \n \n 下載完成之後就到檔案總管找到 ShareX 的資料夾，打開後接著打開 Tools 的資料夾 \n \n \n 最後把路徑複製下來貼到wink裡就可以編譯影片 \n \n \n ------------------------------------------------------------------------------------------------------- \n 這學期分配到的兩個繪圖程式分別為 Solidworks 以及 Solvespace ，這兩套繪圖程式我在以前只學過 Solidworks，所以剛接觸Solvespace的時候有點不適應，但經過多次的繪圖練習後已經熟悉如何繪圖。 \n Solidworks下載方法 \n \n \n Solidworks操作方法 \n \n \n Solvespace 下載方法 \n \n \n Solvespace操作 方法 \n \n ------------------------------------------------------------------------------------------------------- \n 這學期學到了CoppeliaSim這個程式，可以模擬零件的運動過程。 \n \n meArm模擬 \n \n ------------------------------------------------------------------------------------------------------- \n 2022-01-03課堂測驗 \n 零件繪製 \n \n \n UI介面控制 \n \n ------------------------------------------------------------------------------------------------------- \n', 'tags': '', 'url': '期末總結.html'}, {'title': '期末考試', 'text': '第一階段: 請將自己所完成繪製的 meArm Robot 零件與組立檔案畫面呈現在網頁中, 並將所有零件與組立檔案壓縮成"學號_final.zip" 送到個人的\xa0 @gm \xa0 帳號 GDrive, 並將連結轉為公開下載. (若採用 Onshape 請將零組件繪圖連結設為公開分享後, 放入頁面). \n meArm Robot 零件 下載 \n \n ------------------------------------------------------------------------------------------------------- \n 第二階段:請修改第一階段個人所完成的 meArm 組立檔案, 將兩側連桿機構互換, 亦即將帶有三角形連桿的機構與另一方機構互相對調. 完成後, 請在網頁中呈現所完成的組立圖畫面, 並將零組件檔案壓縮成"學號_final_stage2.zip" 送到個人的\xa0 @gm \xa0 帳號 GDrive, 並將連結轉為公開下載. (若採用 Onshape 請將零組件繪圖連結設為公開分享後, 放入頁面). \n meArm兩側連桿機構互換 \n \n ------------------------------------------------------------------------------------------------------- \n 第 三階段: 請將第二階段新完成的 meArm 零組件轉入 CoppeliaSim 後, 利用 Slider 控制其中的各轉動軸, 完成後請以 Wink 影片呈現製作過程, 並將"學號_final.ttt" 檔案壓縮為"學號_final_ttt.zip" 送到個人的\xa0 @gm \xa0 帳號 GDrive, 並將連結轉為公開下載. \n 目前已將meArm兩側互換並丟入CoppeliaSim，但目前尚未讓兩側互換的meArm順利運作，第一階段的meArm已於上次作業成功作動，而第二階段正在努力測試中，尋找問題出在哪裡。 \n meArm (UI介面控制) \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '期末考試.html'}]};