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
#import <React/RCTUIManager.h>
#import <React/RCTBundleURLProvider.h>
#import <React/UIView+React.h>
#import <React/UIView+Private.h>
#import <React/RCTUIManagerUtils.h>
#import "RCTUIManager+leaks.h"

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
    //NSAssert(self.modularName != nil, @"modularName can't be nil");
    if (self.modularName == nil) {
        self.modularName = @"SectionListBasics";
    }
    RCTBridge *bridge = [[SingleClass shared] bridge];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:self.modularName initialProperties:nil];
    
    self.view = rootView;
    RCTLogInfo(@"retainCount=%zd", [[RCTBundleURLProvider sharedSettings] viewRetainCount]);
    RCTLogInfo(@"viewReleaseCount=%zd", [[RCTBundleURLProvider sharedSettings] viewReleaseCount]);
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
//    NSMutableArray *arr = [NSMutableArray alloc] initun
    
    UIView *content = rootView.contentView;
    NSArray<UIView *> *arr = [content reactSubviews];
    RCTLogInfo(@"content.subViews=%@", arr);
//    [arr enumerateObjectsUsingBlock:^(UIView * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
//        [content removeReactSubview:obj];
//        obj = nil;
//    }];
    //[content react_remountAllSubviews];
    RCTUIManager *manger = rootView.bridge.uiManager;
    NSNumber *reactTag = content.reactTag;
    //NSNumber *nativeID = rootView.nativeID;
    
    NSInteger maxReactTagValue = [[manger maxReactTagValue] intValue];
    NSInteger totalSubviewCount = [manger reactViewSubviewCount];
    RCTLogInfo(@"maxReactTagValue=%zd, totalSubviewCount=%zd", maxReactTagValue, totalSubviewCount);
               
//    RCTExecuteOnUIManagerQueue(^{
//        [manger removeSubviewsFromContainerWithID:reactTag];
//    });
    
//    for (UIView *v in [rootView subviews]) {
//        [v removeFromSuperview];
//    }
    //UIView *rootView2 = [rootView.bridge.uiManager viewForNativeID:rootView.nativeID withRootTag:rootView.reactTag];
    RCTLogInfo(@"retainCount=%zd", [[RCTBundleURLProvider sharedSettings] viewRetainCount]);
    RCTLogInfo(@"viewReleaseCount=%zd", [[RCTBundleURLProvider sharedSettings] viewReleaseCount]);

}

- (RCTRootView *)findRootView: (UIView *)view {
    RCTRootView *rootView;
    UIView *supView = view.superview;
    while (supView && rootView == nil) {
        if ([supView isKindOfClass:[RCTRootView class]]) {
            rootView = (RCTRootView *)supView;
        } else {
            supView = supView.superview;
        }
    }
    return rootView;
}

@end
