头部：比UDP复杂多

1. Sequence number，为了保证TCP传输的报文都是有序的
2. Acknowledgement number, 这个序号表示数据接收端期望接收的下一个字节的编号是多少，同时表示上一个序号的数据已经接收到。
3. Window Size ,窗口大小，表示的是还能接收多少字节的数据，用于流量控制