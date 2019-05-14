//
//  SingleClass.m
//  iOS-RN
//
//  Created by Shangpin on 2019/5/7.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import "SingleClass.h"
#import <React/RCTBridge.h>

static SingleClass *_instance;

@interface SingleClass ()

@end

@implementation SingleClass

@synthesize bridge = _bridge;


+ (instancetype)allocWithZone:(struct _NSZone *)zone{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        _instance = [super allocWithZone:zone];
    });
    return _instance;
}

+ (instancetype)initWithLaunchOptions:(NSDictionary *)launchOptions{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        _instance = [[self alloc] init];
        
    });
    return _instance;
}

+ (instancetype)shared {
    return _instance;
}

- (id)copyWithZong:(NSZone *)zone{
    return _instance;
}

#if !__has_feature(objc_arc)
- (oneway void)release{ }

- (instancetype)retain{ return _instance; }

- (instancetype)autorelease{ return _instance; }

- (NSUInteger)retainCount{ return 1; }
#endif


@end


