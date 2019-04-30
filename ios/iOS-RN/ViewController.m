//
//  ViewController.m
//  iOS-RN
//
//  Created by 郭洪安 on 2017/7/10.
//  Copyright © 2017年 UIViewCon. All rights reserved.
//

#import "ViewController.h"
#import "TwoViewController.h"
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    
    UIButton * btn =[UIButton buttonWithType: UIButtonTypeCustom];
    btn.frame =CGRectMake(100,100, self.view.frame.size.width-200, 50);
    [btn setTitle:@"点我去RN" forState:UIControlStateNormal];
    btn.backgroundColor = [UIColor redColor];
    [btn addTarget:self action:@selector(press:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:btn];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(backAction) name:@"backAction" object:nil];
    
}
-(void)press:(UIButton *)btn{
    TwoViewController * two =[[TwoViewController alloc]init];
    [self.navigationController pushViewController:two animated:true];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)backAction {
    [self.navigationController popViewControllerAnimated:true];
}

@end
