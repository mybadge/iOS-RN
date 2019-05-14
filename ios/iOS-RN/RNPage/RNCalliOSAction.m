//
//  RNCalliOSAction.m
//  iOS-RN
//
//  Created by Shangpin on 2019/4/30.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import "RNCalliOSAction.h"

#import <React/RCTEventDispatcher.h>
#import "ViewController.h"

@implementation RNCalliOSAction
@synthesize bridge = _bridge;

//导出模块
RCT_EXPORT_MODULE();    //此处不添加参数即默认为这个OC类的名字


//导出方法，桥接到js的方法返回值类型必须是void
/*
 
 iOS支持方法名一样但是参数不一样的方法，视为两个不同的方法
 但是RN调用iOS这样的方法会出错的
 所以最好别把方法名声明成一样的
 
 */

/**************************************** RN Call iOS ***************************************************/

//一个参数
RCT_EXPORT_METHOD(calliOSActionWithOneParams:(NSString *)name)
{
    NSLog(@"RN传入原生界面的数据为:%@",name);
    //主要这里必须使用主线程发送,不然有可能失效
    dispatch_async(dispatch_get_main_queue(), ^{
        if ([name isEqualToString:@"backAction"]) {
            [self backAction];
        } else if ([name isEqualToString:@"ViewController"]) {
            [[NSNotificationCenter defaultCenter] postNotificationName:@"RNOpenOneVC" object:nil userInfo:@{@"pageName": @"ViewController"}];
        } else if ([name isEqualToString:@"backToTopAction"]) {
             [[NSNotificationCenter defaultCenter] postNotificationName:@"backToTopAction" object:nil];
        }
        else {
            [[NSNotificationCenter defaultCenter] postNotificationName:@"RNOpenOneVC" object:nil];
        }
    });
}

RCT_EXPORT_METHOD(openNativePage:(NSDictionary *)dict)
{
    NSLog(@"RN传入原生界面的数据为:%@",dict);
    //主要这里必须使用主线程发送,不然有可能失效
    dispatch_async(dispatch_get_main_queue(), ^{
        
        [[NSNotificationCenter defaultCenter] postNotificationName:@"RNOpenOneVCWithDict" object:nil userInfo:dict];
        
    });
}

- (void)backAction {
    [[NSNotificationCenter defaultCenter] postNotificationName:@"backAction" object:nil];
}

@end
