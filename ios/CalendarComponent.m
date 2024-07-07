//
//  CalendarComponent.m
//  AmberProject
//
//  Created by Daniel Gutierrez on 6/07/24.
//

#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
#import "CalendarComponent.h"

#import "React/RCTBridgeModule.h"

@interface
RCT_EXTERN_MODULE(CalendarManager, NSObject)
RCT_EXTERN_METHOD(addEvent:(NSString *)title resolver:(RCTPromiseResolveBlock)resolver rejecter:(RCTPromiseRejectBlock)rejecter)

@end
