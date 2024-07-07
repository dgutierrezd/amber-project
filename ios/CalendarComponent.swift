//
//  CalendarComponent.swift
//  AmberProject
//
//  Created by Daniel Gutierrez on 6/07/24.
//

import Foundation

import EventKit

@objc(CalendarManager)
class CalendarManager: NSObject {
  
  @available(iOS 17.0, *)
  @objc func addEvent(_ title: String, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
    
    let eventStore = EKEventStore()
    
    DispatchQueue.global().async {
      var success = true
      
      eventStore.requestFullAccessToEvents { (granted, error) in
        if granted && error == nil {
          let event = EKEvent(eventStore: eventStore)
          let today = Calendar.current.startOfDay(for: Date())
          event.title = title
          event.startDate = today
          event.endDate = Calendar.current.date(byAdding: .day, value: 1, to: today)
          event.isAllDay = true
          event.calendar = eventStore.defaultCalendarForNewEvents
          
          do {
            try eventStore.save(event, span: .thisEvent)
            print("Event saved successfully")
            success = true
          } catch let error as NSError {
            print("Failed to save event: \(error)")
            success = false
          }
        } else {
          print("Permission denied or error: \(error)")
          success = false
        }
      }
      
      if success {
        resolver(true)
      } else {
        let error = NSError(domain: "YourDomain", code: 0, userInfo: nil)
        rejecter("error_code", "Failed to add event", error)
      }
    }
  }
}
