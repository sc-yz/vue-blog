<!--
 * @Author: kian
 * @Date: 2021-12-13 09:40:19
 * @LastEditors: kian
 * @LastEditTime: 2021-12-13 16:38:03
 * @Description:
-->

# 哈哈

## 图像格式

图像格式分两大类型：

1. 光栅图像: 光栅图像由连接的点组成。
2. 矢量图像: 矢量是由连接的线组成的图像。

### 光栅图像

`光栅图也叫做位图、点阵图、像素图`，简单的说，就是最小单位由像素构成的图，只有点的信息，缩放时会失真。每个像素有自己的颜色，类似电脑里的图片都是像素图，你把它放很大就会看到点变成小色块了。

栅是格栅,就是纵横成排的小格，小格小到极至，就是点了。对于一个图像，人可以一眼就看明白。但是计算机要记录下来就要把这个图像分成一个个小格也就是点阵，点格栅分得越细，图像也就记录得越有细节。
[来源百度百科](https://baike.baidu.com/item/%E5%85%89%E6%A0%85%E5%9B%BE%E5%83%8F/7938088)

#### JPEG/JFIF

`JPEG（联合图像专家组）是一种有损压缩方法`；JPEG 压缩图像通常以 JFIF（JPEG 文件交换格式）文件格式存储。JPEG/JFIF 文件扩展名是 JPG 或 JPEG. 几乎每台数码相机都可以将图像保存为 JPEG/JFIF 格式，该格式支持 8 位灰度图像和 24 位彩色图像（红、绿、蓝各 8 位）。JPEG 对图像应用有损压缩，这可以显着减小文件大小。应用程序可以确定要应用的压缩程度，压缩量会影响结果的视觉质量。如果不是太大，压缩不会显着影响或降低图像质量，但 JPEG 文件在重复编辑和保存时会遭受世代退化。（JPEG 也提供无损图像存储，但无损版本并未得到广泛支持。）

#### JPEG 2000

`JPEG 2000 是一种压缩标准，支持无损和有损存储`。使用的压缩方法与标准 JFIF/JPEG 中的不同；它们提高了质量和压缩率，但也需要更多的计算能力来处理。JPEG 2000 还添加了 JPEG 中缺少的功能。它不像 JPEG 那样普遍，但它目前用于专业的电影编辑和分发（例如，某些数字影院对单个电影帧使用 JPEG 2000）。

#### Exif

所述的 Exif（可交换图像文件格式）格式类似于与 TIFF 扩展的 JFIF 格式标准的文件; 它包含在大多数相机使用的 JPEG 写入软件中。其目的是记录并标准化数码相机与编辑和查看软件之间的图像与图像元数据的交换。元数据是为单个图像记录的，包括诸如相机设置、时间和日期、快门速度、曝光、图像尺寸、压缩、相机名称、颜色信息等内容。当通过图像编辑软件查看或编辑图像时，可以显示所有这些图像信息。

实际的 Exif 元数据本身可以包含在不同的主机格式中，例如 TIFF、JFIF (JPEG) 或 PNG。IFF-META 是另一个例子。

#### TIFF

的 TIFF（标记图像文件格式）格式是通常使用的任一柔性格式 TIFF 或 TIF 文件扩展名。标记结构被设计为易于扩展，许多供应商引入了专有的专用标记——结果没有一个阅读器可以处理所有风格的 TIFF 文件。TIFF 可以是有损或无损的，具体取决于为存储像素数据而选择的技术。有些为双层（黑白）图像提供相对较好的无损压缩。某些数码相机可以使用 LZW 以 TIFF 格式保存图像无损存储的压缩算法。网络浏览器不广泛支持 TIFF 图像格式。TIFF 仍然被广泛接受为印刷行业的照片文件标准。TIFF 可以处理特定于设备的颜色空间，例如由一组特定印刷机油墨定义的 CMYK。OCR（光学字符识别）软件包通常为扫描的文本页面生成某种形式的 TIFF 图像（通常是单色）。

#### GIF

GIF（图形交换格式）是在限定于 8 位的调色板，或 256 种颜色的正常使用（而 24 位颜色深度在技术上是可能的）。[1] [2] GIF 最适合存储颜色较少的图形，如简单的图表、形状、标志和卡通风格的图像，因为它使用 LZW 无损压缩，在大面积具有单一颜色时更有效，对摄影或抖动图像效果较差。由于 GIF 的简单性和年代性，它获得了几乎普遍的软件支持。由于其动画功能，尽管与现代视频格式相比压缩率较低，但它仍被广泛用于提供图像动画效果。

#### BMP

BMP 文件格式（Windows 位图）处理微软 Windows 操作系统中的图形文件。通常，`BMP 文件是未压缩的，因此较大且无损`；它们的优点是结构简单，并且在 Windows 程序中被广泛接受。

#### PNG

该 PNG（可移植网络图形）文件格式是作为一个自由的，开放源码的替代 GIF 创建。PNG 文件格式支持 8 位调色板图像（所有调色板颜色可选透明度）和 24 位真彩色（1600 万种颜色）或 48 位真彩色带和不带 alpha 通道——而 GIF 仅支持 256 色和单个透明颜色。

与 JPEG 相比，PNG 在图像具有大的、颜色均匀的区域时表现出色。即使对于照片——JPEG 通常是最终分发的选择，因为它的压缩技术通常会产生较小的文件大小——PNG 仍然非常适合在编辑过程中存储图像，因为它的无损压缩。

PNG 为 GIF 提供了无需专利的替代品（尽管 GIF 本身现在无需专利），并且还可以替代 TIFF 的许多常见用途。支持索引颜色、灰度和真彩色图像，以及一个可选的 alpha 通道。该 ADAM7 交错允许早期预览，即使只图像数据的一小部分被发送。PNG 可以存储伽马和色度数据，以改进异构平台上的颜色匹配。

PNG 旨在在网络浏览器等在线查看应用程序中运行良好，并且可以使用渐进式显示选项进行完全流式传输。PNG 是强大的，提供完整的文件完整性检查和常见传输错误的简单检测。

从 PNG 派生的动画格式是 MNG 和 APNG，它们向后兼容 PNG 并被大多数浏览器支持。

#### PPM、PGM、PBM 和 PNM

Netpbm 格式是一个家族，包括可移植像素图文件格式 (PPM)、可移植灰度图文件格式 (PGM) 和可移植位图文件格式 (PBM)。这些文件要么是纯 ASCII 文件，要么是带有 ASCII 标头的原始二进制文件，它们提供非常基本的功能，并作为在不同平台之间转换像素图、灰度图或位图文件的最低公分母。几个应用程序参照它们统称为 PNM（“ P ortable 一个 Ñ ý 中号 AP”）。

#### WebP

WebP 是 2010 年发布的一种开放图像格式，它同时使用无损和有损压缩。它由 Google 设计，旨在减小图像文件大小以加快网页加载速度：其主要目的是取代 JPEG 作为网络上照片的主要格式。WebP 基于 VP8 的帧内编码，并使用基于 RIFF 的容器。

2011 年，[3] Google 添加了“扩展文件格式”，允许 WebP 支持动画、ICC 配置文件、XMP 和 Exif 元数据以及平铺。

对动画的支持允许将旧的动画 GIF 转换为动画 WebP。

WebP 容器（即 WebP 的 RIFF 容器）允许在 WebP 的基本用例（即包含编码为 VP8 关键帧的单个图像的文件）之上的功能支持。WebP 容器提供额外的支持：

无损压缩 – 可以使用 WebP 无损格式对图像进行无损压缩。
元数据 – 图像可能具有以 EXIF 或 XMP 格式存储的元数据。
透明度 – 图像可能具有透明度，即 Alpha 通道。
颜色配置文件——如国际颜色联盟所述，图像可能具有嵌入的 ICC 配置文件。
动画 – 一个图像可能有多个帧，它们之间有暂停，使其成为动画。[4]

#### HDR 光栅格式

大多数典型的光栅格式不能存储 HDR 数据（每个像素分量 32 位浮点值），这就是为什么一些相对较旧或复杂的格式在这里仍然占主导地位，值得单独提及。不过，更新的替代品正在出现。RGBE 是源自 Radiance 的 HDR 图像格式，也受 Adob​​e Photoshop 支持。JPEG-HDR 是一种来自杜比实验室的文件格式，类似于 RGBE 编码，标准化为 JPEG XT Part 2。

JPEG XT 第 7 部分支持使用四个配置文件 (AD) 编码的增强层在基本 8 位 JPEG 文件中对浮点 HDR 图像进行编码；Profile A 基于 RGBE 格式，Profile B 基于来自 Trellis Management 的 XDepth 格式。

#### HEIF

的高效率的图像文件格式（HEIF）是被标准化由图像容器格式的 MPEG 的基础上 ISO 基础媒体文件格式。虽然 HEIF 可与任何图像压缩格式一起使用，但 HEIF 标准规定了利用图片间预测的 HEVC 帧内编码图像和 HEVC 编码图像序列的存储。

#### 其他光栅图像

- BPG ( Better Portable Graphics ) - 2014 年的一种图像格式。它的目的是在质量或文件大小有问题时替换 JPEG。为此，它具有高数据压缩率，基于 HEVC 视频压缩标准的子集，包括无损压缩。此外，它还支持各种元数据（如 EXIF）。
- DEEP - TVPaint 使用的 IFF 样式格式
- DRW（绘制文件）
- ECW（增强压缩小波）
- FITS（灵活的图像传输系统）
- FLIF（免费无损图像格式）——一种已停产的无损图像格式，声称在压缩率方面优于 PNG、无损 WebP、无损 BPG 和无损 JPEG 2000。它使用 MANIAC（元自适应近零整数算术编码）熵编码算法，这是 CABAC（上下文自适应二进制算术编码）熵编码算法的变体。
- ICO - 一个或多个图标的容器（BMP 和/或 PNG 的子集）
- ILBM - IFF 风格的格式，最多支持 32 位平面表示，以及可选的 64 位扩展
- IMG（ERDAS IMAGINE 图像）
- IMG（图形环境管理器(GEM) 图像文件）- 平面、行程编码
- JPEG XL - 始于 2017 年，支持有损和无损压缩，声称优于传统 JPEG、PNG、GIF
- JPEG XR - 基于 Microsoft HD Photo 的 JPEG 标准
- 分层图像文件格式- 用于显微镜图像处理
- Nrrd（几乎原始的栅格数据）
- PAM (Portable Arbitrary Map) - Netpbm 系列的最新成员
- PCX（图片交换） - 过时
- PGF（渐进式图形文件）
- PLBM（平面位图）——专有的 Amiga 格式
- SGI
- SID（多分辨率无缝图像数据库，MrSID）
- 太阳光栅- 过时
- TGA (TARGA) - 过时
- VICAR 文件格式- NASA / JPL 图像传输格式
- XISF（可扩展图像序列化格式）

### 矢量图像

矢量图，也称为面向对象的图像或绘图图像，在数学上定义为一系列由点连接的线。矢量文件中的图形元素称为对象。每个对象都是一个自成一体的实体，它具有颜色、形状、轮廓、大小和屏幕位置等属性。

矢量图是根据几何特性来绘制图形，矢量可以是一个点或一条线，矢量图只能靠软件生成，文件占用内在空间较小，因为这种类型的图像文件包含独立的分离图像，可以自由无限制的重新组合。它的特点是放大后图像不会失真，和分辨率无关，适用于图形设计、文字设计和一些标志设计、版式设计等。
[来源百度百科](https://baike.baidu.com/item/%E7%9F%A2%E9%87%8F%E5%9B%BE?fromtitle=%E7%9F%A2%E9%87%8F%E5%9B%BE%E5%83%8F&fromid=10035575)

与上述光栅图像格式（其中数据描述每个单独像素的特征）相反，矢量图像格式包含几何描述，可以在任何所需的显示尺寸下平滑呈现。

在某些时候，所有矢量图形都必须光栅化才能在数字显示器上显示。矢量图像也可以使用模拟 CRT 技术显示，例如在某些电子测试设备、医疗监视器、雷达显示器、激光表演和早期视频游戏中使用的技术。绘图仪是使用矢量数据而不是像素数据来绘制图形的打印机。

#### CGM

CGM（Computer Graphics Metafile）是一种用于二维矢量图形、光栅图形和文本的文件格式，由 ISO / IEC 8632 定义。所有图形元素都可以在文本源文件中指定，该文件可以编译为二进制文件或两种文本表示形式之一。CGM 提供了一种图形数据交换方法，用于独立于任何特定应用程序、系统、平台或设备的 2D 图形信息的计算机表示。它在技术插图和专业设计领域得到了一定程度的采用，但在很大程度上已被 SVG 和 DXF 等格式所取代。

#### Gerber 格式 (RS-274X)

的 Gerber 格式（又名扩展的 Gerber，RS-274X）通过格柏 Systems 公司，现在开发 Ucamco，并且是 2D 二值图像描述格式。它是印刷电路板或 PCB 软件使用的事实上的标准格式。它还广泛用于需要高精度二维双级图像的其他行业。[5]

#### SVG

SVG（可缩放矢量图形）是由万维网联盟创建和开发的开放标准，旨在满足（以及多家公司的尝试）对 Web 和其他方面的多功能、可编写脚本和通用矢量格式的需求。SVG 格式没有自己的压缩方案，但由于 XML 的文本性质，可以使用 gzip 等程序压缩 SVG 图形。由于其脚本潜力，SVG 是 Web 应用程序中的关键组件：外观和行为类似于应用程序的交互式网页。

## 有损压缩和无损压缩

### 有损压缩

有损压缩是对图像本身的改变，在保存图像时保留了较多的亮度信息，而将色相和色纯度的信息和周围的像素进行合并，合并的比例不同，压缩的比例也不同，由于信息量减少了，所以压缩比可以很高，图像质量也会相应的下降。

`原理：`
有损压缩可以减少图像在内存和磁盘中占用的空间，在屏幕上观看图像时，不会发现它对图像的外观产生太大的不利影响。因为人的眼睛对光线比较敏感，光线对景物的作用比颜色的作用更为重要，这就是有损压缩技术的基本依据。

### 无损压缩

无损压缩是对文件本身的压缩，和其它数据文件的压缩一样，是对文件的数据存储方式进行优化，采用某种算法表示重复的数据信息，文件可以完全还原，不会影响文件内容，对于数码图像而言，也就不会使图像细节有任何损失。

`原理：`
无损压缩的基本原理是相同的颜色信息只需保存一次。压缩图像的软件首先会确定图像中哪些区域是相同的，哪些是不同的。包括了重复数据的图像(如蓝天) 就可以被压缩，只有蓝天的起始点和终结点需要被记录下来。但是蓝色可能还会有不同的深浅，天空有时也可能被树木、山峰或其他的对象掩盖，这些就需要另外记录。从本质上看，无损压缩的方法可以删除一些重复数据，大大减少要在磁盘上保存的图像尺寸。但是，无损压缩的方法并不能减少图像的内存占用量，这是因为，当从磁盘上读取图像时，软件又会把丢失的像素用适当的颜色信息填充进来。如果要减少图像占用内存的容量，就必须使用有损压缩方法。

## 相关阅读

[光栅图像与矢量图像](http://imgtec.eetrend.com/blog/2019/100043157.html)
[光栅图像格式](https://reference.wolfram.com/language/guide/RasterImageFormats.html.zh?source=footer)
[Texture]
[图片格式](https://www.wbolt.com/in-depth-discussion-of-image-types.html)
