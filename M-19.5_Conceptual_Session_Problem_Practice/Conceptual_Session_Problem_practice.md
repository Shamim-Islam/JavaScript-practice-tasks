**Problem \- 1(basic math)**

তোমাকে **cubeNumber()** নামে একটা function দেওয়া হয়েছে। functionটা একটা positive input নাম্বার নিবে।   
**Task:**

1. input নাম্বারটাকে cube করে result টা রিটার্ন করবে ফাংশন থেকে।  
2. **Bonus**: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিনিংফুল মেসেজ রিটার্ন করে দিবে ফাংশন থেকে। 

| Sample Input | Sample Output |
| :---- | :---- |
| 3 | 27 |
| 4 | 64 |

**Function signature/sample**

function cubeNumber(number) {  
}

**Problem \- 2**

তোমাকে একটা function দেওয়া হবে called “**matchFinder()**” যা ইনপুট হিসেবে দুইটা string নিবে। 

**Task**:

1. যদি প্রথম স্ট্রিংটির কোনো একটি অংশের সাথে দ্বিতীয় স্ট্রিংটির পুরোপুরি মিল খুজে পাও সেক্ষেত্রে তুমি true রিটার্ন করবে।   
2. আর যদি পুরোপুরি মিল খুজে না পাও সেক্ষেত্রে তুমি false রিটার্ন করবে।    
3. **Bonus**: দুটি ইনপুট স্ট্রিং দেওয়া হলো কিনা সেটা validate করবে। যদিদুইটি বা যেকোনো একটি ইনপুট স্ট্রিং না হয় সেক্ষেত্রে তুমি একটা মিনিংফুল মেসেজ রিটার্ন করে দিবে। 

| Sample Input | Sample Output |
| :---- | :---- |
| “John Doe”, “ohn” | true |
| “JavaScript”, “Code” | false |
| “Peter Parker”, “Pen” | false |
| “Peter Parker”,”pet” | false |

**Function definition**

function matchFinder(string1, string2) {}  
 

**Problem \- 3**  
তোমাকে একটা ফাংশন লিখতে হবে যার নাম হবে sortMaker()। এই ফাংশনের parameter হবে একটি array এবং এই array তে সবসময় দুইটি উপাদান থাকবে।  
**Task:**

1. যদি অ্যারের দুইটি উপাদান পজিটিভ সংখ্যা হয় সেক্ষেত্রে তুমি অ্যারেটিকে বড়ো থেকে ছোট ক্রমে সাজিয়ে রিটার্ন করবে।  
2. যদি দুইটি উপাদান একই হয় সেক্ষেত্রে তুমি এই স্ট্রিং রিটার্ন করবেঃ “equal”  
3.  **Bonus:** যদি অ্যারের যেকোনো একটি উপাদান নেগেটিভ সংখ্যা হয় সেক্ষেত্রে তুমি  রিটার্ন  করবে “Invalid Input”

| Sample Input | Sample Output |
| :---- | :---- |
| \[2, 3\] | \[3,2\] |
| \[4,2\] | \[4,2\] |
| \[4,4\] | equal |
| \[1,2\] | \[2,1\] |
| \[4,-2\] | Invalid Input |

**Function definition**

function sortMaker(arr) {  
    
}

**Problem \- 4**

তোমাকে একটা function দেওয়া হবে called “**findAddress()**” যা ইনপুট হিসেবে একটা object  নিবে। Object এর তিনটি property থাকবে।

**Task:** 

1. তোমাকে **১ম sample output এর format এ** output return করতে হবে।  
2. **Bonus:** যদি object এর কোনো property missing থাকে সেক্ষেত্রে সেই অংশটুকু double underscore দিয়ে replace হবে। **(২য় output এর format এ )**

| Input | Output |
| :---- | :---- |
| {street: 10,house: 15A,society: “Earth Perfect”} | 10,15A, Earth Perfect |
| {street: 10,society: “Earth Perfect”}  | 10,\_\_, Earth Perfect |
| {street: 10} | 10, \_\_, \_\_ |

**Function definition:**

function findAddress(obj) {  
    
}

**Problem \- 5**

তুমি দোকানে একটা চিপ্স কিনতে গেলা কিছু খুচরা টাকার নোট নিয়ে। একটা canPay() নামে function বানাও যেটা ২টা ইনপুট নেইঃ একটা array, এবং আরেকটা number।

1. Array এর প্রত্যেক টা element তোমার খুচরা টাকা বুঝাই   
   1 taka  
   2 taka  
   5 taka  
     
2. second input টা বুঝাই চিপ্স এর দাম।

**Task:**

1. যদি খুচরা টাকা গুলো যোগ করে চিপ্স এর দাম বা তার বেশি হয় তাহলে **true** রিটার্ন করবে   
2. আর যদি নোটগুলোর যোগফল চিপ্স এর দামের চেয়ে কম হয় সেক্ষেত্রে  **false** রিটার্ন করবে।  
3. **Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কিনা চেক করবে। empty  অ্যারে হলে মিনিংফুল মেসেজ রিটার্ন করে দিবে।** 

| Sample Input | Sample Output |
| :---- | :---- |
| \[1,2,5\], 10 | false |
| \[1,5,5\],10 | true |

**Function definition:**

function canPay(changeArray, totalDue) {

}

