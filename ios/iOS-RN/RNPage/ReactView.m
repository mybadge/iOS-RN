//
//  ReactView.m
//  iOS-RN
//
//  Created by Shangpin on 2019/4/19.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import "ReactView.h"
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>
#import "SingleClass.h"


@implementation ReactView

-(instancetype)initWithFrame:(CGRect)frame{
    self =[super initWithFrame:frame];
    if (self) {

        // 这里的moduleName一定要和下面的index.ios.js里面的注册一样
        //RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation  moduleName:@"iOSRN"
        //                                              initialProperties:nil
        //                                                  launchOptions:nil];
        RCTBridge *bridge = [SingleClass shared].bridge;
        RCTRootView * rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"iOSRN" initialProperties:nil];
        
        [self addSubview:rootView];
        
        rootView.frame = self.bounds;
    }
    return self;
    
}


@end
