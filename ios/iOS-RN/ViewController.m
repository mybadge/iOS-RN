//
//  ViewController.m
//  iOS-RN
//
//  Created by 郭洪安 on 2017/7/10.
//  Copyright © 2017年 UIViewCon. All rights reserved.
//

#import "ViewController.h"
#import "ReactViewController.h"
#import "SectionListController.h"
#import "SingleClass.h"
#import <React/RCTBridge.h>


@interface ViewController ()

@end

@implementation ViewController


//- (instancetype)initWithCoder:(NSCoder *)coder
//{
//    self = [super initWithCoder:coder];
//    if (self) {
//        self.modularName = @"SectionListBasics";
//    }
//    return self;
//}


- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:false animated:true];
}


- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    self.title = @"首页";
    
    UIButton * btn =[UIButton buttonWithType: UIButtonTypeCustom];
    btn.frame =CGRectMake(100,300, self.view.frame.size.width-200, 50);
    [btn setTitle:@"点我去RN" forState:UIControlStateNormal];
    btn.backgroundColor = [UIColor redColor];
    [btn addTarget:self action:@selector(press:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:btn];
//
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(backAction) name:@"backAction" object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(backToTopAction) name:@"backToTopAction" object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(doPushNotification:) name:@"RNOpenOneVC" object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(doPushNotification2:) name:@"RNOpenOneVCWithDict" object:nil];
    
    
    
}
-(void)press:(UIButton *)btn{
    ReactViewController * two =[[ReactViewController alloc] init];
    [self.navigationController pushViewController:two animated:true];
//    SectionListController *vc = [SectionListController initVC];
//    [self.navigationController pushViewController:vc animated:true];
}

- (void)doPushNotification2:(NSNotification *)notification{
    NSString *pageName = notification.userInfo[@"pageName"];
    Class clz = NSClassFromString(pageName);
    if (clz) {
        SPRNBaseController *vc = [[clz alloc] initWithDictionary:notification.userInfo];
        [self.navigationController pushViewController:vc animated:YES];
        return;
    } else {
        ReactViewController *vc = [[ReactViewController alloc] init];
        [self.navigationController pushViewController:vc animated:YES];
    }
}
- (void)doPushNotification:(NSNotification *)notification{
    NSLog(@"成功收到===>通知");
    ReactViewController *vc = [[ReactViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
    
    //注意不能在这里移除通知否则pus进去后有pop失效
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)backAction {
    [self.navigationController popViewControllerAnimated:true];
}

- (void)backToTopAction {
    [self.navigationController popToRootViewControllerAnimated:true];
}

@end
