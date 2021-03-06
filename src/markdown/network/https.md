# HTTPS

从 HTTP 协议栈层面来看，我们可以在 TCP 和 HTTP 之间插入一个安全层，所有经过安全层的数据都会被加密或者解密，你可以参考下图：

HTTP VS HTTPS

从图中我们可以看出 HTTPS 并非是一个新的协议，通常 HTTP 直接和 TCP 通信，HTTPS 则先和安全层通信，然后安全层再和 TCP 层通信。
也就是说 HTTPS 所有的安全核心都在安全层，它不会影响到上面的 HTTP 协议，也不会影响到下面的 TCP/IP，因此要搞清楚 HTTPS 是如何工作的，就要弄清楚安全层是怎么工作的。
总的来说，安全层有两个主要的职责：对发起 HTTP 请求的数据进行加密操作和对接收到 HTTP 的内容进行解密操作。

## 对称加密

![对称加密](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/symmetrical-encryption-https.png)

1. 浏览器发送`对称加密套件列表+client-random`给服务器
2. 服务器返回`对称加密套件+server-random`到浏览器
3. 最后浏览器和服务器分别返回确认消息。
4. 浏览器端和服务器端都有相同的 client-random 和 service-random 了，然后它们再使用相同的方法将 client-random 和 service-random 混合起来生成一个密钥`master secret`，有了密钥 `master secret` 和加密套件之后，双方就可以进行数据的加密传输了

## 非对称加密

和对称加密只有一个密钥不同，非对称加密算法有 A、B 两把密钥，如果你用 A 密钥来加密，那么只能使用 B 密钥来解密；反过来，如果你要 B 密钥来加密，那么只能用 A 密钥来解密。

在 HTTPS 中，服务器会将其中的一个密钥通过明文的形式发送给浏览器，我们把这个密钥称为公钥，服务器自己留下的那个密钥称为私钥。顾名思义，公钥是每个人都能获取到的，而私钥只有服务器才能知道，不对任何人公开。

![非对称加密](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/asymmetric-encryption-https.png)

1. 浏览器发送`非对称加密套件列表`给服务器
2. 服务器返回`非对称加密套件+公钥`到 浏览器
3. 最后浏览器和服务器分别返回确认消息。
4. 在浏览器端向服务器端发送数据时，就可以使用该公钥来加密数据。由于公钥加密的数据只有私钥才能解密，所以即便黑客截获了数据和公钥，他也是无法使用公钥来解密数据的。

问题：

1. `第一个是非对称加密的效率太低`。这会严重影响到加解密数据的速度，进而影响到用户打开页面的速度。
2. `第二个是无法保证服务器发送给浏览器的数据安全`。虽然浏览器端可以使用公钥来加密，但是服务器端只能采用私钥来加密，私钥加密只有公钥能解密，但黑客也是可以获取得到公钥的，这样就不能保证服务器端数据的安全了。

## 对称加密和非对称加密搭配使用

基于以上两点原因，我们最终选择了一个更加完美的方案，那就是在`传输数据阶段依然使用对称加密`，但是`对称加密的密钥我们采用非对称加密来传输`。

![混合加密](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/hybrid-encryption-https.png)

1. 首先浏览器向服务器发送对称加密套件列表、非对称加密套件列表和随机数 client-random；
2. 服务器保存随机数 client-random，选择对称加密和非对称加密的套件，然后生成随机数 service-random，向浏览器发送选择的加密套件、service-random 和公钥；
3. 浏览器保存公钥，并生成随机数 pre-master，然后利用公钥对 pre-master 加密，并向服务器发送加密后的数据；
4. 最后服务器拿出自己的私钥，解密出 pre-master 数据，并返回确认消息。

服务器和浏览器就有了共同的 client-random、server-random 和 pre-master，然后服务器和浏览器会使用这三组随机数生成对称密钥，因为服务器和浏览器使用同一套方法来生成密钥，所以最终生成的密钥也是相同的。

有了对称加密的密钥之后，双方就可以使用对称加密的方式来传输数据了。

需要特别注意的一点，pre-master 是经过公钥加密之后传输的，所以黑客无法获取到 pre-master，这样黑客就无法生成密钥，也就保证了黑客无法破解传输过程中的数据了
