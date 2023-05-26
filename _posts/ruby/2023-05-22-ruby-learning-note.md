---
layout: post
title:  "Ruby 学习笔记"
date:   2023-05-22 18:03:00 +0800
categories: ruby
---

# Ruby 学习笔记

### [Ruby 安装](https://ruby-china.org/notes/5492)

----------

### 通用的前置玩意儿
- 几乎任何对象都可以用`some_obj.methods`看看有些啥能用的
- 检查某个对象是不是有某个方法可用: `some_obj.respond_to?("a_method")`
- 查看某个对象的 Class: `some_obj.class`
- "Bang method", 是会直接修改自身(而不是返回新实例)的方法, 某些方法后面有个感叹号，如 `arr.uniq!`

----------

### 数据类型
- `Number`: `+`,`-`,`*`,`/`,`.floor`,`.ceil`, `.round(2)`, ...
- `String`: `'str'`, `'\'str\''`, `"'str'"`, `%q('str')`, `"'str'"`, `.size` / `.length`, ...
  + 拼接: `+`, `.concat`, ` << `
  + 模板: `"something #{a_string_var}"`
  + 切割: `"something[start_pos, offset]"`
  + 检索: `"something".include?("in")`
  + 单个替换: `"whatever"["what"] = "wher"  # "wherever"`
  + 全部替换: `"whatever whatever whatever".gsub("what", "wher")`
  + 切成数组: `"a,b,c,d,e,f".split(",")`
  + 数组拼合: `['a','b','c'].join(",")`
- `Boolean`: Ruby 没有布尔类型，只有`TrueClass`和`FalseClass`的单例实例
- `Array`: 索引为数字的，可存放几乎任何类型元素的，有序列表容器
  + 初始化: `arr = []`, `arr = [1,2,3]`
    * `arr = Array.new([1,2,3])  # [1,2,3]`
    * `arr = Array.new(3, "a")  # ["a","a","a"]`
    * `arr = []`, `arr[3] = 'a'`, `a  # [nil, nil, nil, 'a']`
  + 取值: `arr[0]`, `arr.last(2)`, ...
  + 遍历:

    ```rb
    arr = ['a','b','c']
    arr.each do |el|
        puts el
    end
    arr.each_with_index do |el, index|
        puts "#{index} => #{el}"
    end
    ```
  + 拼接: `arr_0 + arr_1`
  + 从某个数组中移除一些元素: `[1,1,3,4,5,6] - [1,2,3]  # [4,5,6]`
  + 在尾部加入元素: `arr.push(el)`, `arr << el`
  + 获取尾部元素: `arr.last  # 不改变原数组`, `arr.pop  # 改变原数组`
  + 使一个数组只读: `arr.freeze`
  + 去重: `arr.uniq  # 返回去重后的数组`, `arr.uniq!  # 直接去重自身`
  + 排序: `arr.sort  # 如果是 .sort! 会改变 arr 本身而不是返回新的 Array`
  + 翻转: `arr.reverse  # 如果是 .reverse! 会改变 arr 本身而不是返回新的 Array`
  + 获取大小: `arr.size`, `arr.length`
  + 检索: `arr = ["I", "love", "ruby"]`
    * `arr.include?("ruby")  # true`
    * `arr.include?("Ruby")  # false`
- `Hash`: 存储键值对的容器
  + 初始化: `h = {}`, `h = Hash.new`, `h = {"k0"=>0, "k1"=>1}`
  + 取值: `h["k0"]`, `h["k_whatever"]  # nil`
  + 加新值
    * `h["k2"] = 2`
    * `h[:symbol_0] = 0  # :symbol_0 是个 symbol 类型的对象，用作标识符`
  + 遍历

  ```rb
  h = {"k0"=>0, "k1"=>1, "k2"=>2}
  h.each do |key, val|
    puts "#{key} => #{val}"
  end
  ```
  + 合并: `h0.merge(h1)  # 如果 h1 里有 h0 中已经存在的键, 合并后的 Hash 中该键的值会为 h1 中的值`
  + 获取 键/值 数组: `h.keys`, `h.values`
  + 删除元素: `h.delete(key)  # 如果 key 存在，返回该 key 对应的值，否则返回 nil`
  + 过滤: `h.reject {|key, val| val < 20}  # 同样如果是 .reject! 会修改 h 本身而不是返回一个新的 Hash`
  + 判断 键/值 是否存在: `h.has_key?(:k0)`, `h.has_value?(0)`

----------

### 程序控制流 (判断, 循环)

```rb
# 与, 或, 非
a && b
a || b
!a

# 一些"空"的强转布尔判断
0    # true
""   # true
[]   # true
{}   # true
nil  # false

# 条件分支
if a
  # ...
elsif b
  # ...
else
  # ...
end

unless a_false_condition
  # 与 if 相反，条件为 false 反而会进来
end

# 另外， unless 后面只能跟 else，没有 elsunless 这种玩意儿

# 比较 >, <, >=, <=, ==, !=, ===
# === 与 == 的区别是， === 进一步比较了值的类型

# 三目
(a > 0) ? a : b

# case when (别的什么语言里的switch，有SQL那味儿了=。=)
case a
when "a"
  # ...
when "b"
  # ...
when "c"
  # ...
else
  # ...
end

# 循环，遍历
while true do
  puts "This will run forever ..."
end

cash = 0
until cash > 10 do  # 直到。。。 (或者理解得饶一点， util 后面的条件是 false 就会进循环)
  cash += 1
end

loop do
  # ...
  break if something_matched
  # ...
end

begin
  # ...
end while keep_looping_if_this_is_true

arr.each do |item|
  puts item
end

hash.each do |k, v|
  puts "#{k} => #{v}"
end

arr.each_with_index do |item, index|  # 注意这里的 index 在后面=。=
  puts "arr[#{index}] is #{item}"
end

# ------ 骚操作 start ------
hash = {id: 1, email: "bob@bob.com", first_name: "Bob"}
hash.each_with_index do |k, v|
  puts "k: #{k},v: #{v}"
end
# k: [:id, 1],v: 0
# k: [:email, "bob@bob.com"],v: 1
# k: [:first_name, "Bob"],v: 2

hash.each_with_index do |k, v, i|  # 不对劲
  puts "k: #{k},v: #{v}, i: #{i}"
end
# k: [:id, 1],v: 0, i: 
# k: [:email, "bob@bob.com"],v: 1, i: 
# k: [:first_name, "Bob"],v: 2, i: 

hash.each_with_index do |(k, v), i|  # 对劲了
  puts "k: #{k},v: #{v}, i: #{i}"
end
# 但是为啥我不用 each，要用这个 each_with_index 来取索引呢=。=
# k: id,v: 1, i: 0
# k: email,v: bob@bob.com, i: 1
# k: first_name,v: Bob, i: 2
# ------ 骚操作 end ------

[1,2,3].map do |item|
  item + 5
end
# [6, 7, 8]

# 一些"进阶"玩意儿 (yield, block.call)
def with_sales_tax arr
  arr.map do |item|
    yield item.to_f
  end
end
prices = [5,25,"20",3.75,"5.25"]
sales_tax = 0.25
new_prices = with_sales_tax prices do |price|
  price * sales_tax
end
# [1.25, 6.25, 5.0, 0.9375, 1.3125]

def with_sales_tax(arr, &block)
  arr.map do |item|
    block.call(item.to_f)
  end
end
prices = [5,25,"20",3.75,"5.25"]
sales_tax = 0.25
new_prices = with_sales_tax prices do |price|
  price * sales_tax
end
# [1.25, 6.25, 5.0, 0.9375, 1.3125]
```

----------

### 函数/方法

```rb
# 基本定义
def method_name param_a, param_b = 50  # param_b 是带有默认值的参数，可被调用时覆盖
  puts "Sum of the params is #{param_a + param_b}"
end
method_name(10)  # 调用方式
method_name 10, 20  # 另一种调用方式

# name arguments (不知道怎么翻译，具名参数？)
def m(param_0:, param_1: 2)  # 这种形式的参数也可以带默认值
  puts "param_0: #{param_0}, param_1: #{param_1}"
end
m(param_1: 1, param_0: 0)  # param_0: 0, param_1: 1

def m a=1, b  # 可以，但是令人困惑
  return a+b
end
m(2)  # 3

def m a=50, b=100, c  #可以，但是令人困惑
  puts "#{a}, #{b}, #{c}"
end
m(1,2)  # 1, 100, 2

def m a=1, b=2, c, d=4  # 不可以
  return a+b+c
end

def m  # 无参数，可以这样定义
  return 0
end
m("Nope")  # 但是这样带参数调用会报错

def m a, b  # 完全没问题的定义
  return a+b
end
m(1)  # 但是不能这样调用

def m(*params)  # splat argument
  params.each do |param|
    puts param  # 能依次拿到 "a" "b" "c"
  end
end
m("a", "b", "c")

def m(**params)  # double splat argument
  puts params.inspect
end
m(a: "a", b: "b")  # {:a=>"a", :b=>"b"}

# 关于 splat operator "*"
a, *b = ["a", "b", "c", "d"]
puts a  # "a"
puts b  # ["b", "c", "d"]
puts b.class  # Array

arr = "Hello".to_a  # 不可以，会报错
arr = *"Hello"  # 可以 ["Hello"]
# 其实，想字符串转数组的话，这样也可以
"Hello".split  # ["Hello"]
"Hello".split("")  # ["H", "e", "l", "l", "o"]

# 关于返回值
def m
  city = "New York"
  "Welcome to #{city}" # 不用特意写 return，最后一个表达式会被 return
  # 当然也可以写 return，没问题的:
  # return "Welcome to #{city}"
  # 尤其是，当你想在方法中间的某个循环或者判断中返回值的时候，就写 return 好了
end
m  # "Welcome to New York"

def m  # 多返回值, 如果有返回值没有被接收，则会被直接丢弃
  return 0, 1, 2
end
a, b = m
a  # 0
b  # 1

# 关于方法的命名惯例(非强制)
def is_valid?  # 以 ? 结尾表示该方法返回布尔值
end

def change_arr! arr  # 以 ! 结尾表示该方法会直接修改，而不是返回 参数/对象 本身
  arr.uniq!
end

# 用 .send 调用方法/访问属性?
arr = [1,2,3]
arr.send(:length)  # 用 symbol
arr.send("length")  # 也可以用字符串
arr.send(:last, 2)  # 调方法的时候传参数
def custom_method(arg_0:, arg_1:)
  puts "arg_0: #{arg_0}, arg_1: #{arg_1}"
end
arr.send(:custom_method, arg_0: 0, arg_1: 1)  # 调方法的时候传 named arguments
# .send 用的不多，但是如果想调用用户传入的函数/方法，就得用它了


# 关于编码风格(非强制)
# 如果函数没有参数，定义的时候别加括号
# 如果函数有参数，定义的时候把参数包在括号里面
# 如果不是必须要在函数里面通过流程控制中断返回或者别的什么必要的原因，一般不写 return
```

----------

### OOP (面向对象编程，类啊对象啊啥的)

```rb
# 类的定义和实力化

class User
  attr_accessor :name, :address, :birthday  # getters and setters
  attr_reader :read_only_var  # 只读实例变量，要写入的话要通过定义特别的实例方法
  attr_writer :write_only_var  # 几乎用不到，只写实例变量，只能写不能读=。=

  @@roles = ["Admin", "Manager", "Director"]  # 类变量

  def initialize(name)  # 类似 构造方法/构造器
    @name = name  # @打头的变量为实例变量
  end

  def name  # 实例方法
    @name
  end

  def self.roles  # 类方法定义方式之一
    ["Admin", "Manager", "Director"]
  end

  def User.roles  # 类方法定义方式之一
    ["Admin", "Manager", "Director"]
  end

  class << self  # 类方法定义方式之一
    def roles
      ["Admin", "Manager", "Director"]
    end
  end

  def get_roles  # 实例方法，但用于演示如何在实力方法中调用类方法
      User.roles
      # 或者
      self.class.roles
  end

  def modify_read_only_var(new_var)
    @read_only_var = new_var
  end
end

u_0 = User.new("User 0")
u_0.name  # "User 0"
u_0.address = "Planet Earth"
u_0.address  # "Planet Earth"

u_1 = User.new("User 1")
u_1.name  # "User 1"
u_1.address  # nil
u_1.read_only_var  # nil
u_1.modify_read_only_var("Yo")
u_1.read_only_var  # "Yo"
```

> #### **特别注意**
>
> class 方法和变量，可能会在多进程或多线程环境中出现不可预期的问题
>
> 因为不同的进程或线程中，class的定义可能被修改

```rb
# 继承
class Child < Parent
  # 默认 Parent 里有的(方法啊变量啊)，Child 里面也能用
  # 除非 Child 里面有同名的覆盖了，这种情况下会优先使用 Child 里面的

  def initialize(something)
    # ...
    super  # 在子类中调用父类的构造方法
    super(something_else)  # 在子类中带参数调用父类的构造方法
  end

  def initialize(*)  # naked splat arguments
    # ...
    super  # 这里调用父类的构造函数，会把调用子类构造函数时传入的参数，如数传给父类的构造函数
  end
end

# 封装
# 可见性: Public, Private, Protected

class Something
  def public_m
    self.private_m_0
    self.protected_m_0
  end

  private  # 在这个类的定义范围内，所有在这个关键字后面的，都会被视为私有方法
  def private_m_0
    puts "private_m_0 called"
  end

  def private_m_1
    puts "private_m_1 called"
  end

  protected  # 神奇的是，在这加了 protected 关键字之后，后面的方法定义就不是 private 的了
  def protected_m_0  # protected 方法可以被此类和此类的子类内部调用，仅此而已了
    puts "protected_m_0 called"
  end
end

class SomethingNew < Something
  def public_m
    self.protected_m_0
  end
end

s = Something.new()
s.public_m       # private_m_0 called, protected_m_0 called
s.private_m_0    # (NoMethodError)
s.private_m_1    # (NoMethodError)
s.protected_m_0  # (NoMethodError)

s_n = SomethingNew.new()
s_n.public_m     # protected_m_0 called

# "高级", 绕过可见性限制
# 此举仅建议在调试时使用，毕竟会有多多少少的安全性问题，以及代码质量问题
require "URI"
uri = URI.parse("http://google.com")  # <URI::HTTP http://google.com>
uri.protected_methods()  # 看看有些啥
# [:set_user,                                     
#  :set_password,                                 
#  :set_registry,                                 
#  :component_ary,                                
#  :set_scheme,                                   
#  :set_userinfo,                                 
#  :set_host,                                     
#  :set_port,                                     
#  :set_path,
#  :set_opaque]
uri.set_port 443  # (NoMethodError), 常规调用行不通
uri.send(:set_port, 443)  # 443, 可以了
# !!! 用 .send 固然可以绕过可见性限制，但是用，还是要慎之又慎 !!!
```

----------

### 模块和混入 (Modules and Mixins, 是这么翻译的吧?)

- 模块的存在，是为了代码重用
- 比如，两个不同的类定义，可以引用同一个模块
- 更具体一点，User 类和 Building 类都需要 Address
- 但是如果用继承的话，User 和 Building 继承 Address 就有点怪
- 这时候就可以把 Address 相关的玩意儿包在一个 module 里面，给他俩重用
- **注意**: 如果引用两个或以上模块，要注意引用顺序
- **注意**: 实例级复用和类级复用的关键字不一样 `include` 和 `extend`

```rb
# 一下示例为给 class 添加实例级复用代码
module Address
  attr_accessor\
    :address_line_1,\
    :address_line_2,\
    :city,\
    :state,\
    :postal_code,\
    :country

  def mailing_label
    label = []
    label << @address_line_1
    label << @address_line_2
    label << "#{@city} #{@state} #{@postal_code}"
    label << @country
    label.join("\n")
  end
end

class User
  def initialize
  end
  include Address  # 实例级复用
end

class Building
  def initialize
  end
  include Address  # 实例级复用
end

u = User.new()
u.address_line_1 = "address_line_1"
u.address_line_2 = "address_line_2"
u.city = "city"
u.state = "state"
u.postal_code = "postal_code"
u.country = "country"
u.mailing_label  # "address_line_1\naddress_line_2\ncity state postal_code\ncountry"


# 接下来是 类级复用
module HelperMethods
  def attributes_for_json
    [:id, :name, :created_at]
  end
end

class User
  extend HelperMethods  # 类级复用
end

User.attributes_for_json  # [:id, :name, :created_at]

# 模块回调/钩子 (Module callback/hooks or whatever)
module SpyModule
  def self.included(base_class)
    puts "I've been included into: #{base_class}"
  end
end

class User
  include SpyModule  # 被 include 的时候就会直接输出: I've been included into: User
end

module SpyModule
  def self.extended(base_class)
    puts "I've been extended into: #{base_class}"
  end
end

class User
  extend SpyModule  # 被 extend 的时候就会直接输出: I've been extended into: User
end

# 骚操作: include 的时候通过回调调用 extend 顺便引入类级复用模块
module ClassMethods
  def attributes_for_json
    [:id, :name, :created_at]
  end
end

module InstanceMethods
  def self.included(base_class)
    puts "I've been included into: #{base_class}"
    base_class.extend(ClassMethods)
  end
end

class User
  include InstanceMethods  # I've been included into: User
end

User.attributes_for_json  # [:id, :name, :created_at]

# 模块方法 (模块本身的方法(可以在不依赖被引用的情况下被调用))
module BabelFish
  def self.the_answer
    42
  end
end

BabelFish.the_answer  # 42

# 命名空间 (namespace), 用 module 来实现
module Zippy  # 定义了一个 Zippy 命名空间
  SKIPPY = "skippy"

  class Zappy
  end

  module Dappy
    def self.say_something
      puts "doo"
    end
  end
end

# 然后如下所示，使用命名空间中的内容
Zippy::SKIPPY  # "skippy"
Zippy::Zappy.new  # <Zippy::Zappy:0x00000001076db0c0>
Zippy::Dappy.say_something  # doo

# prepend (这玩意儿理解起来有点费劲，简单来说就是在Ruby的"方法查找链"里面插个队)
module ClassLogger
  def log(msg)
    "[#{self.class}] #{msg}"
  end
end

class User
  include ClassLogger
  def log(msg)
    "[#{Time.now.to_f.to_s}] #{super(msg)}"
  end
end

class Company
  prepend ClassLogger
  def log(msg)
    "[#{Time.now.to_f.to_s}] #{super(msg)}"
  end
end

User.new.log("hi")  # "[1684930168.620109] [User] hi"
Company.new.log("hi")  # "[Company] hi"
# 为什么 Company 没有 log 时间?
# 因为 prepend 把 ClassLogger 的 log 方法插队到了 Company 类实例的 "方法查找链" 前面
# 用 .ancestors 查看这俩类的 "方法查找链" 就能看出来
User.ancestors  # [User, ClassLogger, Object, PP::ObjectMixin, Kernel, BasicObject]
Company.ancestors  # [ClassLogger, Company, Object, PP::ObjectMixin, Kernel, BasicObject]

# 加上继承场景，更绕一点的 prepend
module PrependedModule
  def output
    puts "Outputting from the PrependedModule"
    super
  end
end

class ParentClass
  prepend PrependedModule
  def output
    puts "Outputting from the ParentClass"
  end
end

class ChildClass < ParentClass
  def output
    puts "Outputting from the ChildClass"
  end
end

ChildClass.new.output  # Outputting from the ChildClass
ChildClass.ancestors  # [ChildClass, PrependedModule, ParentClass, Object, ...
ParentClass.ancestors  # [PrependedModule, ParentClass, Object, ...

# 然后
class ChildClass < ParentClass
  def output
    super  # 6...太6了...
    puts "Outputting from the ChildClass"
  end
end
ChildClass.new.output
# Outputting from the PrependedModule
# Outputting from the ParentClass
# Outputting from the ChildClass

# 还有更绕的，理解不了，遂先放弃了，碰到了再研究。。。
```

----------

### Ruby Gems

- ruby 世界的包管理

```bash
gem search
gem install
gem dependency
gem Versioning
gem list  # 列出本地已经安装的 gems
```

```rb
require 'json'  # 引入 gem
```

----------

### 调试相关

```rb
# 基本log
require 'logger'
logger = Logger.new(STDOUT)
logger.debug("Some debug info ...")
# D, [2023-05-25T16:43:40.926982 #21478] DEBUG -- : Some debug info ...

# log 级别 .debug, .info, .warn, .error, .fatal
# 也可以这样指定级别
logger = Logger.new(STDOUT, level: "error")

# 除了 STDOUT, log 还可以被输出到 STDERR, File

# log 保留策略
# ----- 按大小的保留策略 -----
log_size = 100 * 1024 * 1024
log_limit = 5
logger = Logger.new("log.txt", log_limit, log_size)
# --------------------------
# ----- 按时间的保留策略 -----
logger = Logger.new("log.txt", "daily")
logger = Logger.new("log.txt", "weekly")
logger = Logger.new("log.txt", "monthly")
# --------------------------

# gui 断点工具: vscode 有，其它 IDE 也有对应的
# cli 断点工具: byebug
# 详情略，要用的时候看文档就行
```

----------

### 元编程基础

```rb
# block
(1..5).each do  # 用 do ... end 定义 block
  puts "I'm inside the block"  # 这串会被输出5遍
end

5.times { puts "I'm inside the block" }  # 用 { ... } 定义 block, 同样这串被输出了5遍

# yield
def m(&block)
  puts "part_1"
  yield
  puts "part_2"
end

m { puts "block, yield" }
# part_1
# block, yield
# part_2

# 两个 yield
def m(&block)
  puts "part_1"
  yield
  puts "part_2"
  yield
end

m { puts "block, yield" }
# part_1
# block, yield
# part_2
# block, yield

# 两个 yield, 但是两个 statement 塞进 block
def m(&block)
  puts "part_1"
  yield
  puts "part_2"
  yield
end

m do
  puts "block_0_0"
  puts "block_0_1"
end
# part_1
# block_0_0
# block_0_1
# part_2
# block_0_0
# block_0_1

# block_given?
def m(&block)
  puts "part_1"
  yield if block_given?
  puts "part_2"
end

m { puts "block" }
# part_1
# block
# part_2
m
# part_1
# part_2

# proc 对象
t = Proc.new {|x,y| puts "proc here"}
t.call  # proc here

# lambdas
l = lambda {puts "Hello"}
l.call  # Hello

# proc 和 lambda 的区别, 在于 return
def lm
  lambda {return "from lambda"}.call  # lm 方法下面的 return 会被执行
  return "from lm"
end
def pm
  Proc.new {return "from proc"}.call  # pm 方法下面的 return 不会被执行
  return "from pm"
end

puts lm  # from lm
puts pm  # from proc

# 魔改 class (functional_reloading/monkey_patching)
# (进阶操作，务必小心)
# 下面是一个 Ruby 内置的 class，可以直接这样往里面塞自定义方法
# (意味着非内置的 class 也能这么干)
class Integer
  def add_eight
    self + 8
  end
end

puts 8.add_eight  # 16
# 但是作用仅限于这个"程序"内
# 比如我退出irb，不写 class Integer ... end
# 直接 puts 8.add_eight
# 就会报错: undefined method `add_eight' for 8:Integer (NoMethodError)

# monkey_patching (use with extreme care(书上如是说))
arr = ["Hello", "World"]
puts arr.size  # 2 (还没开始 patch)
# 开始 patch
class Array
  def size
    self.length + 3
  end
end
arr = ["Hello", "World"]
puts arr.size  # 5 (书上说的返回 5，但是我运行报错了，暂且就认为是这么patch的吧=。=)
# /usr/local/lib/ruby/gems/3.2.0/gems/irb-1.6.4/lib/irb/ruby-lex.rb:705:in `check_string_literal': undefined method `event' for nil:NilClass (NoMethodError)
#       case t.event
#             ^^^^^^

# method_missing, 用于在某个对象上调用不存在的方法时的兜底
class TheClass
end
TheClass.new.xyz  # undefined method `xyz' for #<TheClass:0x...> (NoMethodError)

class TheClass
  def method_missing(method_name, *args, &block)
    puts "The method you have specified #{method_name} does not exist"
  end
end
TheClass.new.xyz  # The method you have specified xyz does not exist

# respond_to_missing?
# 与 method_missing 搭配使用，魔改某个类的时候，给 respond_to? 兜底
class TheClass
  def method_missing(method_name, *args, &block)
    if method_name.to_s == "xyz"
      puts "Ghost method"
    else
      super
    end
  end
  def respond_to_missing?(method_name, include_private=false)
    method_name.to_s.start_with?('x') || super
  end
end
obj = TheClass.new
obj.xyz  # Ghost method
obj.respond_to?("xyz")  # true

# define_method
# 为什么有了def，还要用 define_method 来定义方法呢
# 因为 define_method 可以用字符串作为方法名，可以动态为类创建方法辣
class TheClass
  define_method("m") do |arg_0, arg_1|
    "m with arg_0: #{arg_0}, arg_1: #{arg_1}"
  end
end
obj = TheClass.new
obj.m("val_0", "val_1")  # "m with arg_0: val_0, arg_1: val_1"
```

----------

到这里就差不多了，书里剩下的如何创建上传自己的gem，如何使用rails，就去看相关文档就好了

> 部分代码引用自 [《The Ruby Workshop》](https://weread.qq.com/web/bookDetail/a8e32c50722ff904a8e847c)