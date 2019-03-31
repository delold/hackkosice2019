import moment from 'moment'

export const formatDuration = (timestamp) => {
  const duration = moment.duration(timestamp)

  const seconds = duration.seconds()
  const minutes = duration.minutes()
  const hours = duration.hours()
  const days = duration.days()

  const pad = (str) => Math.abs(str) > 9 ? Math.abs(str) : `0${Math.abs(str)}`
  const final = [pad(hours), pad(minutes), pad(seconds)]

  if (days > 0) {
    final.unshift(days)
  }

  return timestamp < 0 ? `-${final.join(':')}` : final.join(':')
}

export const formatHumanDuration = (timestamp) => moment.duration(timestamp).humanize()