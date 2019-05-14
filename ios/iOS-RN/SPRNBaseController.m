//
//  SPRNBaseController.m
//  iOS-RN
//
//  Created by Shangpin on 2019/5/13.
//  Copyright © 2019 Shangpin. All rights reserved.
//

#import "SPRNBaseController.h"
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>
#import "SingleClass.h"
#import <React/RCTEventEmitter.h>
#import <React/RCTLog.h>

@interface SPRNBaseController ()
@end

@implementation SPRNBaseController


- (instancetype)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    if (self) {
        self.RNParamterDic = dict;
        self.modularName = [dict valueForKey:@"modularName"];
    }
    return self;
}

- (void)loadView {
    //if (!self.modularName)
    NSAssert(self.modularName != nil, @"modularName can't be nil");
    RCTBridge *bridge = [SingleClass shared].bridge;
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:self.modularName initialProperties:nil];
    
    self.view = rootView;
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:false animated:true];
    [self sendViewStateChangedToRN:@"viewWillAppear"];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    [self sendViewStateChangedToRN:@"viewDidAppear"];
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
    [self sendViewStateChangedToRN:@"viewDidDisappear"];
}
- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    [self sendViewStateChangedToRN:@"viewWillDisappear"];
}

- (void)viewDidLoad {
    [super viewDidLoad];

}

- (void)sendViewStateChangedToRN:(NSString *)methodName {
    RCTRootView *rootView = (RCTRootView *)self.view;
    NSMutableDictionary *mDict = [NSMutableDictionary dictionaryWithDictionary:rootView.appProperties];
    mDict[@"viewStateChange"] = methodName;
    rootView.appProperties = mDict.copy;
}

- (NSInteger)randamViewTag {
    return arc4random();
    
}

- (void)dealloc {
    RCTRootView *rootView = (RCTRootView *)self.view;
    RCTLogInfo(@"rootView.subViews=%@", [rootView subviews]);
    for (UIView *v in [rootView subviews]) {
        [v removeFromSuperview];
    }
    self.view = nil;
    
}

@end
